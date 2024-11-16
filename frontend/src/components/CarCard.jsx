import React from 'react';
import { FaCar, FaRupeeSign } from 'react-icons/fa';

const CarCard = ({ car, handleViewDetails }) => {
  const { title, company, carType, price, images, description } = car;

  return (
    <div
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-xl transition-transform hover:scale-[1.02]"
      onClick={() => handleViewDetails(car)}
    >
      <div className="relative overflow-hidden">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
          {carType.toUpperCase()}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <FaCar className="mr-2" />
          <span className="text-lg">{company}</span>
        </div>
        <div
          className="text-md text-gray-500 mb-3 truncate"
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {description}
        </div>
        <div className="flex justify-between items-center bg-blue-50 rounded px-4 py-1">
          <div className="text-md font-semibold text-gray-800 flex items-center">
            <FaRupeeSign className="mr-1" />
            {price} lakhs
          </div>
          <button className="text-blue-600 font-semibold">VIEW DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;