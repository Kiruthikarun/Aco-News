import React from 'react';

const NewsCard = ({ title, description, image, url, source }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          <span className="block mt-2 text-xs text-gray-500">Source: {source}</span>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;