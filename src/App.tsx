import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Home, Search, Plus, MessageSquare, User, Music2 } from 'lucide-react';

function App() {
  const [likes, setLikes] = useState(289);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <div className="h-screen bg-black text-white">
      {/* Main Content Area */}
      <div className="relative h-full">
        {/* Video Container */}
        <div className="h-full w-full bg-gradient-to-b from-gray-900 to-black">
          <img 
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            className="h-full w-full object-cover opacity-50"
            alt="Video thumbnail"
          />
        </div>

        {/* Right Side Icons */}
        <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-6">
          <button 
            onClick={handleLike}
            className="flex flex-col items-center"
          >
            <Heart 
              className={`w-8 h-8 ${isLiked ? 'text-red-500 fill-red-500' : 'text-white'}`}
            />
            <span className="text-sm mt-1">{likes}</span>
          </button>
          
          <button className="flex flex-col items-center">
            <MessageCircle className="w-8 h-8" />
            <span className="text-sm mt-1">19</span>
          </button>
          
          <button className="flex flex-col items-center">
            <Share2 className="w-8 h-8" />
            <span className="text-sm mt-1">42</span>
          </button>
        </div>

        {/* Video Info */}
        <div className="absolute bottom-20 left-4 max-w-[80%]">
          <p className="font-semibold mb-2">@connectingdotz</p>
          <p className="text-sm mb-2">Connect with amazing people around you! 🌟 #connecting #community</p>
          <div className="flex items-center">
            <Music2 className="w-4 h-4 mr-2" />
            <p className="text-sm">Original Sound - Connecting Dotz</p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full bg-black bg-opacity-90 px-2 py-3">
          <div className="flex justify-around items-center">
            <button className="flex flex-col items-center">
              <Home className="w-6 h-6" />
              <span className="text-xs mt-1">Home</span>
            </button>
            <button className="flex flex-col items-center">
              <Search className="w-6 h-6" />
              <span className="text-xs mt-1">Discover</span>
            </button>
            <button className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-pink-500 to-blue-500 p-1 rounded-md">
                <Plus className="w-6 h-6" />
              </div>
            </button>
            <button className="flex flex-col items-center">
              <MessageSquare className="w-6 h-6" />
              <span className="text-xs mt-1">Inbox</span>
            </button>
            <button className="flex flex-col items-center">
              <User className="w-6 h-6" />
              <span className="text-xs mt-1">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;