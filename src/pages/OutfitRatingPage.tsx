import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Shirt, Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface StyleCategory {
  name: string;
  description: string;
  matchScore: number;
}

const OutfitRatingPage = () => {
  const [outfitImage, setOutfitImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<{
    styleCategories: StyleCategory[];
    overallRating: number;
    suggestions: string[];
  } | null>(null);

  const { isDarkMode } = useTheme();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOutfitImage(reader.result as string);
        setAnalyzing(true);
        // Simulate AI analysis
        setTimeout(() => {
          setAnalysis({
            styleCategories: [
              {
                name: 'Old Money',
                description: 'Classic, refined, and timeless aesthetic',
                matchScore: 85,
              },
              {
                name: 'Casual',
                description: 'Relaxed and comfortable everyday wear',
                matchScore: 60,
              },
              {
                name: 'Formal',
                description: 'Sophisticated and dressy attire',
                matchScore: 75,
              },
            ],
            overallRating: 4,
            suggestions: [
              'Consider adding classic accessories like pearl earrings or a vintage watch',
              'The color palette works well with your skin tone',
              'Try incorporating more texture through fabrics like cashmere or linen',
            ],
          });
          setAnalyzing(false);
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className={`text-5xl font-bold mb-4 
        ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        } 
        bg-gradient-to-r from-primary-500 to-accent-500 text-transparent bg-clip-text animate-gradient`}>Rate My Outfit</h1>
        <p className="text-yellow-600 max-w-2xl mx-auto">
          Upload your outfit and get detailed feedback on your style choices
        </p>
      </motion.div>

      {!outfitImage ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <Shirt className="w-16 h-16 text-purple-500 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Upload Your Outfit</h2>
            <p className="text-gray-600 mb-8">
              Take a clear photo of your complete outfit for the best analysis
            </p>
            <label className="cursor-pointer inline-flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors duration-200">
              <Upload className="w-5 h-5 mr-2" />
              Choose Photo
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src={outfitImage}
                  alt="Outfit"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                {analyzing ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <Shirt className="w-12 h-12 text-purple-500 animate-pulse" />
                    <p className="text-lg font-medium mt-4">Analyzing your outfit...</p>
                  </div>
                ) : analysis && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Style Analysis</h3>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            className={`w-6 h-6 ${
                              index < analysis.overallRating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Style Categories</h4>
                      <div className="space-y-3">
                        {analysis.styleCategories.map((category) => (
                          <div key={category.name} className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-medium">{category.name}</span>
                              <span className="text-sm text-gray-600">
                                {category.matchScore}% match
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-purple-500 h-2 rounded-full"
                                style={{ width: `${category.matchScore}%` }}
                              />
                            </div>
                            <p className="text-sm text-gray-600 mt-2">
                              {category.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Suggestions</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {analysis.suggestions.map((suggestion, index) => (
                          <li key={index} className="text-gray-700">
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default OutfitRatingPage;