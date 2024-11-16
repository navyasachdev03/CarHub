import React, { useEffect, useState } from 'react';
import CarListCarousel from '../components/CarListCarousel';
import Navbar from '../components/Navbar';
import AddCarModal from '../components/AddCarModal';
import { FaPlus } from 'react-icons/fa';
import { Circles } from 'react-loader-spinner';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from '../../ApiBaseURL';
import Cookies from 'js-cookie';

const CarListPage = ({ userData, addCarToUserData }) => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const fetchCars = async () => {
        setLoading(true);
        try {
            let carDetails;

            if (searchTerm) {
                // Search API
                const response = await fetch(`${API_BASE_URL}cars/search?keyword=${searchTerm}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${Cookies.get("accessToken")}`,
                    },
                    credentials: 'include',
                });
                const data = await response.json();
                carDetails = data.data;
            } else {
                // Default car fetching
                const userCars = userData.cars[0];
                carDetails = await Promise.all(
                    userCars.map((carId) =>
                        fetch(`${API_BASE_URL}cars/${carId}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${Cookies.get("accessToken")}`,
                            },
                            credentials: 'include',
                        })
                            .then((response) => response.json())
                            .then((data) => data.data)
                    )
                );
            }

            setCars(carDetails);
        } catch (error) {
            console.error('Error fetching car details:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCars();
    }, [userData, searchTerm]);

    const handleAddCar = () => {
        setIsModalOpen(true);
    };

    const handleViewDetails = (car) => {
        navigate('/details', { state: { car } });
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleModalSubmit = async (formData, images) => {

        try {

            console.log(formData);
            console.log(images);
            const formDataToSend = new FormData();
            formDataToSend.append('title', formData.title);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('carType', formData.carType);
            formDataToSend.append('fuelType', formData.fuelType);
            formDataToSend.append('transmission', formData.transmission);
            formDataToSend.append('company', formData.company);
            formDataToSend.append('seatingCapacity', formData.seatingCapacity);
            formDataToSend.append('engine', formData.engine);
            formDataToSend.append('mileage', formData.mileage);
            formDataToSend.append('price', formData.price);

            images.forEach((file) => {
                formDataToSend.append('images', file);
            });

            await fetch(`${API_BASE_URL}cars/`, {
                headers: {Authorization: `Bearer ${Cookies.get("accessToken")}`},
                method: 'POST',
                body: formDataToSend,
                credentials: 'include',
            })
                .then(response => response.json())
                .then(data => {
                    if (data.statusCode === 201) {
                        alert('Car added successfully');
                        setIsModalOpen(false);
                        addCarToUserData(data.data._id)
                        fetchCars();
                    }
                    else {
                        console.error('Adding car failed:', data.message);
                        alert('Error Adding car');
                    }
                })
                .catch(error => console.error('Error adding car:', error));
        } catch (error) {
            console.error('Error creating car:', error);
            alert('Error adding car');
        }

    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar setSearchTerm={setSearchTerm} />
            <h1 className="text-2xl font-semibold text-center mb-6 p-10">
                {userData.name}'s Cars
            </h1>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <Circles
                        height="80"
                        width="80"
                        ariaLabel="circles-loading"
                        visible={true}
                        color="#2196F3"
                    />
                </div>
            ) : cars.length === 0 ? (
                <div className="text-center justify-center items-center flex flex-col">
                    <h2 className="text-4xl font-semibold mb-4">No Cars to Show!</h2>
                    <button
                        onClick={handleAddCar}
                        className="flex items-center justify-center bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition"
                    >
                        <FaPlus className="mr-2" />
                        Add Car
                    </button>
                </div>
            ) : (
                <>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <CarListCarousel cars={cars} handleViewDetails={handleViewDetails} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={handleAddCar}
                                className="flex items-center justify-center bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition mb-10"
                            >
                                <FaPlus className="mr-2" />
                                Add Car
                            </button>
                        </div>
                    </motion.div>

                </>
            )}

            <AddCarModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSubmit={handleModalSubmit}
            />
        </div>
    );
};

export default CarListPage;