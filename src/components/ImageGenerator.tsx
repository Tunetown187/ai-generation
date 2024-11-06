import React, { useState } from 'react';
import { Wand2, Image as ImageIcon, Download, Share2, Loader2 } from 'lucide-react';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">AI Image Generation</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A majestic dragon soaring through a sunset sky, digital art style..."
            className="w-full h-32 p-4 border rounded-lg mb-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          
          <div className="flex gap-4">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isGenerating ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Wand2 className="w-5 h-5" />
              )}
              {isGenerating ? 'Generating...' : 'Generate'}
            </button>
            
            <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Random Prompt
            </button>
          </div>
        </div>

        {showResult && (
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={`https://source.unsplash.com/random/800x600?ai,future&sig=${i}`}
                  alt="Generated artwork"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">Version {i}</div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;