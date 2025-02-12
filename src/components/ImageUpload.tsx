import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (image: string) => void;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageUpload,
  title,
  description,
  icon,
}) => {
  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          onImageUpload(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    },
    [onImageUpload]
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex flex-col items-center">
        {icon}
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-2">
          <Upload className="w-5 h-5" />
          Choose Image
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;