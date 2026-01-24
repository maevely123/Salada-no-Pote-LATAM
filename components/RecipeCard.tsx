import React from 'react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="bg-[#FFF9E5] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col transform hover:-translate-y-1">
      {/* Image Container - Full width, natural height (no cropping) */}
      <div className="w-full">
        <img 
          src={recipe.imageUrl} 
          alt={recipe.title} 
          className="w-full h-auto block"
        />
      </div>
      
      {/* Content Container */}
      <div className="p-6 pb-8 text-center flex-1 flex flex-col justify-center text-[#3D3D3D]">
        <div className="mb-6">
          <h3 className="font-sans text-xl md:text-2xl font-medium leading-tight uppercase tracking-wide mb-1">
            {recipe.title}
          </h3>
          <p className="font-sans text-xl md:text-2xl font-medium leading-tight uppercase tracking-wide">
            {recipe.subtitle}
          </p>
        </div>
        
        <div className="space-y-1 text-lg font-normal text-gray-700">
          <p>{recipe.conservation}</p>
          <p>{recipe.calories}</p>
        </div>
      </div>
    </div>
  );
};