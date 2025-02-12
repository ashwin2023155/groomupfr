import React from 'react';
import { Heart, Share2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

interface Outfit {
  id: string;
  image: string;
  user: string;
  userAvatar: string;
  likes: number;
  comments: number;
  category: string;
}

const outfits: Outfit[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
    user: 'Sofia Style',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    likes: 234,
    comments: 45,
    category: 'Old Money'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
    user: 'Emma Fashion',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    likes: 189,
    comments: 32,
    category: 'Casual Chic'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800',
    user: 'Mia Trends',
    userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200',
    likes: 567,
    comments: 89,
    category: 'Formal'
  }
];

const OutfitFeed = () => {
  const { isDarkMode } = useTheme();

  const shareOutfit = (outfit: Outfit) => {
    if (navigator.share) {
      navigator.share({
        title: `Check out this ${outfit.category} outfit by ${outfit.user}`,
        text: 'Found this amazing outfit on Groomupfr!',
        url: window.location.href,
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        Trending Outfits
      </h2>
      <div className="grid gap-8">
        {outfits.map((outfit) => (
          <motion.div
            key={outfit.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-xl shadow-lg overflow-hidden ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <img
              src={outfit.image}
              alt={`Outfit by ${outfit.user}`}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={outfit.userAvatar}
                    alt={outfit.user}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      {outfit.user}
                    </h3>
                    <span className="text-sm text-primary-500">{outfit.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => shareOutfit(outfit)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <Share2 className="w-5 h-5 text-accent-500" />
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 text-primary-500">
                  <Heart className="w-5 h-5" />
                  <span>{outfit.likes}</span>
                </button>
                <button className="flex items-center space-x-1 text-accent-500">
                  <MessageCircle className="w-5 h-5" />
                  <span>{outfit.comments}</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OutfitFeed;