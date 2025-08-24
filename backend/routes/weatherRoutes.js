import express from "express";
import jwtCheck from "../middleware/jwtCheck.js";
import { getWeatherdata } from "../controllers/weatherController.js";

const router = express.Router();

router.get("/weatherData", jwtCheck, getWeatherdata);

export default router;
