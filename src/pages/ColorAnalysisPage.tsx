import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Upload, Sparkles } from 'lucide-react';
import ColorPaletteRecommendation from '../components/ColorPaletteRecommendation';
import { useTheme } from '../context/ThemeContext';

const ColorAnalysisPage = () => {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [skinTone, setSkinTone] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const { isDarkMode } = useTheme();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result as string);
        setAnalyzing(true);
        // Simulate AI analysis
        setTimeout(() => {
          // In a real app, this would be determined by AI
          setSkinTone(Math.random() > 0.5 ? 'warm' : 'cool');
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
        bg-gradient-to-r from-primary-500 to-accent-500 text-transparent bg-clip-text animate-gradient`}>Color Analysis</h1>
        <p className="text-yellow-600 max-w-2xl mx-auto">
          Upload your photo and let our AI analyze your skin tone to recommend the perfect colors for your wardrobe
        </p>
      </motion.div>

      {!userImage ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <Camera className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Upload Your Photo</h2>
            <p className="text-gray-600 mb-8">
              For best results, use a well-lit photo of your face without makeup
            </p>
            <label className="cursor-pointer inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200">
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
                  src={userImage}
                  alt="User"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                {analyzing ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <Sparkles className="w-12 h-12 text-blue-500 animate-pulse" />
                    <p className="text-lg font-medium mt-4">Analyzing your skin tone...</p>
                  </div>
                ) : (
                  <ColorPaletteRecommendation skinTone={skinTone} />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ColorAnalysisPage;