import React from 'react';
import { Star } from 'lucide-react';

interface OutfitRatingProps {
  outfitImage: string;
  skinTone: string | null;
}

const OutfitRating: React.FC<OutfitRatingProps> = ({ outfitImage, skinTone }) => {
  // In a real app, this would be calculated based on color analysis
  const rating = 4;
  
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-6">
        <img
          src={outfitImage}
          alt="Outfit"
          className="w-48 h-48 object-cover rounded-lg"
        />
        <div>
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-6 h-6 ${
                  index < rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <h3 className="text-xl font-medium mb-2">Outfit Analysis</h3>
          <div className="space-y-2 text-gray-600">
            <p>Great choice! This outfit aligns well with your color palette.</p>
            <p>The colors complement your skin tone and create a harmonious look.</p>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium mb-2">Suggestions for Improvement:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Try adding accessories in complementary colors</li>
              <li>Consider layering with neutral tones</li>
              <li>Experiment with different textures in the same color family</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutfitRating;