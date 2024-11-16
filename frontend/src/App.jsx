import React, { useState } from 'react';
import CarListPage from './pages/CarListPage';
import Account from './pages/Account';
import CarDetailPage from './pages/CarDetailPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner'
  ; <BallTriangle
    height={100}
    width={100}
    radius={5}
    color="#4fa94d"
    ariaLabel="ball-triangle-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />

function App() {

  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const handleLogin = (userData) => {
    setUserData(userData);
    console.log(userData);
    navigate('/home');
  }


  const removeCarFromUserData = (carId) => {
    setUserData((prevData) => {
      if (prevData && Array.isArray(prevData.cars) && Array.isArray(prevData.cars[0])) {
        return {
          ...prevData,
          cars: [
            prevData.cars[0].filter((id) => id !== carId),
          ],
        };
      }
    });
  };

  const addCarToUserData = (carId) => {
    setUserData((prevData) => {
      if (prevData && Array.isArray(prevData.cars) && Array.isArray(prevData.cars[0])) {
        return {
          ...prevData,
          cars: [
            [...prevData.cars[0], carId],
          ],
        };
      }
      return prevData;
    });
  };


  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Account onLogin={handleLogin} />} />
          <Route path="/home" element={<CarListPage userData={userData} addCarToUserData={addCarToUserData} />} />
          <Route path="/details" element={<CarDetailPage removeCarFromUserData={removeCarFromUserData} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;