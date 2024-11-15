import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EventCard from './EventCard';
import { useNavigate } from 'react-router-dom';

function EventCarousel({ events, title, eventsToShow = 3, openModal }) {
    const navigate = useNavigate();
    const [scrollIndex, setScrollIndex] = useState(0);
    const maxIndex = events.length - eventsToShow;

    const handleScroll = (direction) => {
        if (direction === 'next') {
            setScrollIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
        } else {
            setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
    };

    return (
        <div className="mt-10 px-5 mb-10">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl font-bold">{title}</h2>
                <button onClick={() => navigate('/events')} className="text-blue-500 font-semibold">
                    View All
                </button>
            </div>

            <div className="relative overflow-y-auto no-scrollbar">
                <motion.div
                    className="flex space-x-6 transition-transform duration-800 ease-in-out"
                    initial={{ x: 0 }}
                    animate={{ x: -scrollIndex * 105 + '%' }}
                    style={{ width: '100%' }}
                >
                    {events.map((event, index) => (
                        <div key={index} className="flex-none md:w-1/3 w-full p-2">
                            <EventCard event={event} openModal={openModal}/>
                        </div>
                    ))}
                </motion.div>

                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white"
                    onClick={() => handleScroll('prev')}
                    disabled={scrollIndex === 0}
                >
                    &#10094;
                </button>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white"
                    onClick={() => handleScroll('next')}
                    disabled={scrollIndex === maxIndex}
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
}

export default EventCarousel;