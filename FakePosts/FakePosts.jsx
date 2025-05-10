import React, { useState, useEffect } from 'react';

const FakePosts = () => {
  const [posts, setPosts] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const [dragonAnimation, setDragonAnimation] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log('Error fetching posts:', error));
  }, []);

  const handleExplore = () => {
    setDragonAnimation(false);
    setTimeout(() => setShowContent(true), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 to-red-700 overflow-hidden">
      {/* Dragon Animation Intro */}
      {!showContent && (
        <div className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center transition-opacity duration-1000 ${dragonAnimation ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="relative w-full max-w-4xl h-64">
            {/* Dragon SVG Animation */}
            <svg 
              viewBox="0 0 500 200" 
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                id="dragon-path"
                d="M-100,100 Q150,50 300,100 T700,100"
                fill="none"
                stroke="transparent"
              />
              <path 
                d="M20,20 L40,40 L60,20 L80,40 L100,20 L120,40 L140,20 L160,40 L180,20 L200,40 L220,20 L240,40 L260,20 L280,40 L300,20 L320,40 L340,20 L360,40 L380,20 L400,40"
                stroke="#FFD700" 
                strokeWidth="3" 
                fill="none"
                className="animate-dragonPath"
              />
              <g className="animate-dragonMove">
                <path 
                  d="M0,0 L20,10 L0,20 L10,10 Z" 
                  fill="#FF0000" 
                  transform="translate(0,0) rotate(0)"
                />
                <circle cx="5" cy="10" r="3" fill="#FFD700" />
              </g>
            </svg>
            
            <div className="text-center mt-8">
              <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6 animate-pulse">
                Dragon's Golden Age
              </h2>
              <p className="text-xl text-white mb-8">The Dragon Rises with Chinese Innovation</p>
              <button 
                onClick={handleExplore}
                className="bg-yellow-500 hover:bg-yellow-600 text-red-900 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:scale-105 transition-all duration-300 animate-bounce"
              >
                Explore Innovations →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content (only shown after animation) */}
      {showContent && (
        <div className="min-h-screen bg-gradient-to-b from-red-50 to-red-100">
          <header className="bg-red-600 text-white py-12 shadow-xl">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                China's Tech Innovations
                <br />
                <span className="text-xl md:text-2xl font-normal">Technological Achievements</span>
              </h1>
            </div>
          </header>

          <main className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <article 
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden border-l-4 border-red-600"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                        {post.id}
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold text-red-800 group-hover:text-red-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-500">Certified by Ministry of Science</p>
                      </div>
                    </div>
                    <p className="text-gray-600 line-clamp-3">
                      {post.body} China's research in this field has reached world-leading levels...
                    </p>
                  </div>
                  <div className="bg-red-100 px-6 py-3 border-t border-red-50">
                    <button className="text-red-600 hover:text-red-800 font-medium flex items-center">
                      Learn More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </main>

          <footer className="bg-red-800 text-white py-6 mt-12">
            <div className="container mx-auto px-4 text-center">
              <p className="mb-2">Building a technology powerhouse under Party leadership</p>
              <p className="text-sm opacity-75">Ministry of Science - National Development and Reform Commission</p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default FakePosts;
