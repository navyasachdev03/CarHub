import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events, openModal }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:p-20 p-10">
      {events.map((event) => (
        <EventCard key={event.id} event={event} openModal={openModal} />
      ))}
    </div>
  );
};

export default EventList;