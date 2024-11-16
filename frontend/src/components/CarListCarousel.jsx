import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CarCard from './CarCard';
import { useNavigate } from 'react-router-dom';

function CarListCarousel({ cars, carsToShow = 3, handleViewDetails }) {
    const navigate = useNavigate();
    const [scrollIndex, setScrollIndex] = useState(0);
    const maxIndex = cars.length - carsToShow;

    const handleScroll = (direction) => {
        if (direction === 'next') {
            setScrollIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
        } else {
            setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
    };

    return (
        <div className="mt-10 px-5">

            <div className="relative overflow-y-auto no-scrollbar">
                <motion.div
                    className="flex space-x-6 transition-transform duration-800 ease-in-out"
                    initial={{ x: 0 }}
                    animate={{ x: -scrollIndex * 105 + '%' }}
                    style={{ width: '100%' }}
                >
                    {cars.map((car) => (
                        <div key={car._id} className="flex-none md:w-1/3 w-full p-2">
                            <CarCard car={car} handleViewDetails={handleViewDetails} />
                        </div>
                    ))}
                </motion.div>

                <button
                    className="fixed left-4 top-1/2 transform -translate-y-1/2 p-2 text-white rounded bg-black bg-opacity-50"
                    onClick={() => handleScroll('prev')}
                    disabled={scrollIndex === 0}
                >
                    &#10094;
                </button>
                <button
                    className="fixed right-4 top-1/2 transform -translate-y-1/2 p-2 text-white rounded bg-black bg-opacity-50"
                    onClick={() => handleScroll('next')}
                    disabled={scrollIndex === maxIndex}
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
}

export default CarListCarousel;