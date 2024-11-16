import mongoose, { Schema } from "mongoose";

const carSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    images: {
      type: [String],
      validate: {
        validator: function (v) {
          return v.length <= 10;
        },
        message: 'A car can have a maximum of 10 images.',
      },
    },
    carType: {
      type: String,
      required: true,
      enum: ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 'Pickup Truck', 'Minivan', 'Crossover'],
    },
    fuelType: {
      type: String,
      required: true,
      enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'CNG', 'LPG'],
    },
    transmission: {
      type: String,
      required: true,
      enum: ['Manual', 'Automatic', 'CVT', 'Semi-Automatic'],
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    seatingCapacity: {
      type: Number,
      required: true,
      min: 2,
      max: 10,
    },
    engine: {
      type: Number,
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Car = mongoose.model("Car", carSchema);