import React from 'react';
import EventListPage from './pages/EventListPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (

    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventListPage />} />
      </Routes>
    </div>

  );
}

export default App;