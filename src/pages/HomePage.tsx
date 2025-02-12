import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Shirt, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import OutfitFeed from '../components/OutfitFeed';

const HomePage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const features = [
    {
      icon: <Camera className="h-8 w-8 text-primary-500" />,
      title: 'Color Analysis',
      description: 'Get personalized color recommendations based on your skin tone',
      action: () => navigate('/color-analysis'),
    },
    {
      icon: <Shirt className="h-8 w-8 text-accent-500" />,
      title: 'Outfit Rating',
      description: 'Upload your outfit and get style feedback',
      action: () => navigate('/outfit-rating'),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className={`text-5xl font-bold mb-4 
        ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        } 
        bg-gradient-to-r from-primary-500 to-accent-500 text-transparent bg-clip-text animate-gradient`}>
          Discover Your Perfect Style
        </h1>
        <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
          Let AI help you find the perfect colors and styles that complement your unique features
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer
            border border-transparent hover:border-primary-500`}
            onClick={feature.action}
          >
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h2 className={`text-2xl font-semibold mt-4 mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                {feature.title}
              </h2>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                {feature.description}
              </p>
              <button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2">
                Get Started
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <OutfitFeed />
    </div>
  );
};

export default HomePage;