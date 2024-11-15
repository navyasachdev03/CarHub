import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const EventCard = ({ event, openModal }) => {
  const { name, date, location, category, imgName, description, price } = event;

  const imagePath = `/assets/${imgName}.jpeg`;

  return (
    <div 
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-xl transition-transform hover:scale-[1.02]"
      onClick={() => openModal(event)}
    >
      <div className="relative overflow-hidden">
        <img
          src={imagePath}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
          {category.toUpperCase()}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <FaCalendarAlt className="mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <FaMapMarkerAlt className="mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex justify-between items-center bg-blue-50 rounded px-4 py-1">
          <div className="text-md font-semibold text-gray-800">
            ₹{price} Onwards
          </div>
          <button className="text-blue-600 font-semibold">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;