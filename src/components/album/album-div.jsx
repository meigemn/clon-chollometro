import React from 'react';

const AlbumDiv = ({ name, imagenBanda }) => {
  return (
    <div className="w-[80px] h-[80px] mx-auto mt-4 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-110">
      <img src={imagenBanda} alt={name} className="w-full h-full object-cover" />
      <p className="text-center mt-2">{name}</p>
    </div>
  );
};

export default AlbumDiv;
