import React from 'react';
import { Palette } from 'lucide-react';

interface ColorPaletteRecommendationProps {
  skinTone: string | null;
}

const ColorPaletteRecommendation: React.FC<ColorPaletteRecommendationProps> = ({
  skinTone,
}) => {
  const getColorPalette = (tone: string | null) => {
    switch (tone) {
      case 'warm':
        return [
          { name: 'Coral', hex: '#FF7F50' },
          { name: 'Golden Yellow', hex: '#FFD700' },
          { name: 'Terracotta', hex: '#E2725B' },
          { name: 'Olive Green', hex: '#808000' },
          { name: 'Warm Brown', hex: '#8B4513' },
        ];
      case 'cool':
        return [
          { name: 'Royal Blue', hex: '#4169E1' },
          { name: 'Purple', hex: '#800080' },
          { name: 'Emerald', hex: '#50C878' },
          { name: 'Burgundy', hex: '#800020' },
          { name: 'Silver', hex: '#C0C0C0' },
        ];
      default:
        return [
          { name: 'Navy', hex: '#000080' },
          { name: 'White', hex: '#FFFFFF' },
          { name: 'Black', hex: '#000000' },
          { name: 'Gray', hex: '#808080' },
          { name: 'Beige', hex: '#F5F5DC' },
        ];
    }
  };

  const palette = getColorPalette(skinTone);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Palette className="w-5 h-5 text-blue-500" />
        <span className="font-medium">Recommended Colors</span>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {palette.map((color) => (
          <div key={color.hex} className="text-center">
            <div
              className="w-16 h-16 rounded-full mx-auto mb-2"
              style={{ backgroundColor: color.hex }}
            />
            <span className="text-sm text-gray-600">{color.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-medium mb-2">Styling Tips:</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>These colors will complement your skin tone perfectly</li>
          <li>Mix and match these shades for a harmonious look</li>
          <li>Use darker shades for bottom wear and lighter ones for top wear</li>
        </ul>
      </div>
    </div>
  );
};

export default ColorPaletteRecommendation;