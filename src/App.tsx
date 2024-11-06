import React, { useState } from 'react';
import { ImagePlus, Wand2, Download, Loader2 } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    // Handle file upload logic here
    toast.success('Image uploaded successfully!');
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    maxFiles: 1
  });

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt');
      return;
    }

    setGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setResult('https://images.unsplash.com/photo-1699894195921-5532e4f7242f');
      setGenerating(false);
      toast.success('Image generated successfully!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Toaster position="top-center" />
      
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wand2 className="h-8 w-8 text-purple-400" />
            <h1 className="text-2xl font-bold">AI Image Studio</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Prompt Input */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Create something amazing</h2>
            <div className="flex gap-4">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A magical forest with glowing mushrooms and fairy lights..."
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition"
              />
              <button
                onClick={handleGenerate}
                disabled={generating}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {generating ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-5 w-5" />
                    Generate
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Upload Area */}
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${
              isDragActive ? 'border-purple-500 bg-purple-500/10' : 'border-gray-700 hover:border-purple-500'
            }`}
          >
            <input {...getInputProps()} />
            <ImagePlus className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-300">Drag & drop an image here, or click to select</p>
            <p className="text-sm text-gray-500 mt-2">Supported formats: PNG, JPG</p>
          </div>

          {/* Result Display */}
          {result && (
            <div className="space-y-4">
              <div className="relative group">
                <img
                  src={result}
                  alt="Generated result"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => window.open(result, '_blank')}
                    className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition"
                  >
                    <Download className="h-5 w-5" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;