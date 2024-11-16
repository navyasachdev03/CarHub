import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Car } from "../models/car.model.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import fs from "fs";


const handleImageUploads = async (files) => {
  const imageUrls = [];
  for (const file of files) {
    const response = await uploadOnCloudinary(file.path);
    if (response?.url) imageUrls.push(response.url);
  }
  return imageUrls;
};


const createCar = asyncHandler(async (req, res) => {

  const { title, description, carType, fuelType, transmission, company, seatingCapacity, engine, mileage, price } = req.body;

  if (!title || !carType || !fuelType || !transmission || !company || !seatingCapacity || !engine || !mileage || !price) {
    throw new ApiError(400, "All required fields must be provided.");
  }
  
  const imageUrls = await handleImageUploads(req.files);

  const car = await Car.create({
    title,
    description,
    images: imageUrls,
    carType,
    fuelType,
    transmission,
    company,
    seatingCapacity,
    engine,
    mileage,
    price,
  });

  req.user.cars.push(car._id);
  await req.user.save();

  res.status(201).json(new ApiResponse(201, car, "Car created successfully."));
});


const getAllCars = asyncHandler(async (req, res) => {
  const cars = await Car.find({ _id: { $in: req.user.cars } });
  res.status(200).json(new ApiResponse(200, cars, "Cars fetched successfully."));
});


const getCarById = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.carId);
  if (!car) {
    return res
    .status(404)
    .json(new ApiResponse(404, {}, "Car not found!"));
  }
  res.status(200).json(new ApiResponse(200, car, "Car fetched successfully."));
});


const updateCar = asyncHandler(async (req, res) => {
  const { title, description, carType, fuelType, transmission, company, seatingCapacity, engine, mileage, price } = req.body;

  const car = await Car.findById(req.params.carId);
  if (!car) {
    return res
    .status(404)
    .json(new ApiResponse(404, {}, "Car not found!"));
  }

  if (!req.user.cars.includes(car._id.toString())) {
    throw new ApiError(403, "You do not have permission to update this car.");
  }

  let updatedImages = car.images;
  if (req.files && req.files.length > 0) {
    updatedImages = await handleImageUploads(req.files);
  }

  const updatedItem = await Car.findByIdAndUpdate(req.params.carId, req.body, updatedImages, { new: true });

  res.status(200).json(new ApiResponse(200, updatedItem, "Car updated successfully."));
});


const deleteCar = asyncHandler(async (req, res) => {

  const {carId} = req.params;
  const car = await Car.findById(carId);
  if (!car) {
    return res
    .status(404)
    .json(new ApiResponse(404, {}, "Car not found!"));
  }

  if (!req.user.cars.includes(car._id.toString())) {
    throw new ApiError(403, "You do not have permission to delete this car.");
  }
  await Car.findByIdAndDelete(carId);

  await User.findByIdAndUpdate(req.user._id, {
    $pull: { cars: carId },
  });

  res.status(200).json(new ApiResponse(200, {}, "Car deleted successfully."));
});


const searchCars = asyncHandler(async (req, res) => {
  const { keyword } = req.query;

  if (!keyword) {
    return res
    .status(400)
    .json(new ApiResponse(400, {}, "Search keyword is required."));
  }

  const cars = await Car.find({
    _id: { $in: req.user.cars },
    $or: [
      { title: { $regex: keyword, $options: "i" } },
      { description: { $regex: keyword, $options: "i" } },
      { carType: { $regex: keyword, $options: "i" } },
      { company: { $regex: keyword, $options: "i" } },
    ],
  });

  res.status(200).json(new ApiResponse(200, cars, "Search results fetched."));
});

export { createCar, getAllCars, getCarById, updateCar, deleteCar, searchCars };