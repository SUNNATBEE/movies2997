import React from 'react';

const CATEGORIES = [
  'Все',
  'Национальные',
  'Спортивные',
  'Детские',
  'Познавательные',
  'Новостные',
  'Музыкальные',
  'Культурные',
  'Развлекательные',
];

const CategoryFilter = ({ activeCategory, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3 mt-6 mb-6 overflow-x-auto no-scrollbar">
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-colors duration-200 border ${
              isActive
                ? 'bg-orange-500 border-orange-400 text-white shadow-md'
                : 'bg-neutral-900 border-neutral-700 text-neutral-200 hover:bg-neutral-800 hover:border-orange-500'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;

