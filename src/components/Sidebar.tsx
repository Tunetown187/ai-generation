import React from 'react';
import { Home, Image, Video, History, Settings, Crown } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: Image, label: 'Image Generation' },
    { icon: Video, label: 'Video Generation' },
    { icon: History, label: 'History' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-gray-900 h-screen fixed left-0 top-0 text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <Image className="w-8 h-8 text-purple-500" />
        <span className="text-xl font-bold">DreamForge AI</span>
      </div>
      
      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5" />
            <span className="font-medium">Pro Plan</span>
          </div>
          <button className="mt-2 w-full bg-white text-purple-600 rounded px-4 py-2 font-medium hover:bg-gray-100 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>

      <nav>
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 w-full p-3 hover:bg-gray-800 rounded-lg transition-colors mb-1"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;