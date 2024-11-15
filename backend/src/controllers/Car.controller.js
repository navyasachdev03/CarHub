import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Car } from "../models/car.model.js";
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
  const { title, description, carType, fuelType, transmission, company, seatingCapacity, engine, mileage } = req.body;

  if (!title || !carType || !fuelType || !transmission || !company || !seatingCapacity || !engine || !mileage) {
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
  const { title, description, carType, fuelType, transmission, company, seatingCapacity, engine, mileage } = req.body;

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

  Object.assign(car, {
    title: title || car.title,
    description: description || car.description,
    images: updatedImages,
    carType: carType || car.carType,
    fuelType: fuelType || car.fuelType,
    transmission: transmission || car.transmission,
    company: company || car.company,
    seatingCapacity: seatingCapacity || car.seatingCapacity,
    engine: engine || car.engine,
    mileage: mileage || car.mileage,
  });

  await car.save();

  res.status(200).json(new ApiResponse(200, car, "Car updated successfully."));
});


const deleteCar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.carId);
  if (!car) {
    return res
    .status(404)
    .json(new ApiResponse(404, {}, "Car not found!"));
  }

  if (!req.user.cars.includes(car._id.toString())) {
    throw new ApiError(403, "You do not have permission to delete this car.");
  }

  req.user.cars = req.user.cars.filter((id) => id.toString() !== car._id.toString());
  await req.user.save();
  await car.remove();

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