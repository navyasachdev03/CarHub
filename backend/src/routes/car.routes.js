import { Router } from "express";
import {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
  searchCars,
} from "../controllers/Car.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const carRouter = Router();

carRouter.route("/")
  .post(verifyJWT, upload.array("images", 10), createCar)
  .get(verifyJWT, getAllCars);

carRouter.route("/search")
  .get(verifyJWT, searchCars);

carRouter.route("/:carId")
  .get(verifyJWT, getCarById)
  .patch(verifyJWT, upload.array("images", 10), updateCar)
  .delete(verifyJWT, deleteCar);

export default carRouter;