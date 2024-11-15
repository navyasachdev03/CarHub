import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventList from '../components/EventList';
import EventModal from '../components/EventModal';
import { BallTriangle } from 'react-loader-spinner';
import { motion } from 'framer-motion';
import events from '../data/events';
import { useLocation } from 'react-router-dom';

function EventListPage() {
  const location = useLocation();
  const initialGenre = location.state?.genre || 'All';

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [genreFilter, setGenreFilter] = useState(initialGenre);
  const [locationFilter, setLocationFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredEvents = events.filter((event) => {
    const matchesSearch = 
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = genreFilter === 'All' || event.category === genreFilter;
    const matchesLocation = locationFilter === 'All' || event.city === locationFilter;

    return matchesSearch && matchesGenre && matchesLocation;
  });

  const handleFilterChange = (type, value) => {
    setLoading(true);
    setTimeout(() => {
      if (type === 'genre') setGenreFilter(value);
      else setLocationFilter(value);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar setSearchTerm={setSearchTerm} />

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#FF5733"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </div>
      ) : (
        <div className="px-4 py-8 transition-opacity duration-500 ease-in-out opacity-100">
          <h1 className="text-3xl font-bold text-center mb-10">All Events</h1>

          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-5 md:space-x-8 mb-8">
            <div className="flex flex-wrap items-center">
              <span className="mr-4 font-semibold">Genre:</span>
              {['All', 'Music', 'Workshop', 'Festival', 'Health', 'Entertainment'].map((genre) => (
                <button
                  key={genre}
                  onClick={() => handleFilterChange('genre', genre)}
                  className={`px-4 py-2 m-1 rounded ${genreFilter === genre ? 'bg-red-500 text-white' : 'bg-gray-200'
                    }`}
                >
                  {genre}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center">
              <span className="mr-4 font-semibold">Location:</span>
              {['All', 'Chandigarh', 'Panchkula', 'Mohali'].map((location) => (
                <button
                  key={location}
                  onClick={() => handleFilterChange('location', location)}
                  className={`px-4 py-2 m-1 rounded ${locationFilter === location ? 'bg-red-500 text-white' : 'bg-gray-200'
                    }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {filteredEvents.length > 0 ? (
              <EventList events={filteredEvents} openModal={openModal} />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <img src='/assets/notfound.png' alt="No events found" />
              </div>
            )}
          </motion.div>
        </div>
      )}

      {selectedEvent && <EventModal event={selectedEvent} closeModal={closeModal} />}

      <Footer/>
    </div>
  );
}

export default EventListPage;