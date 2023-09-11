import { Router } from "express";

import passengersRouter from "./passengersRoutes.js";
import citiesRouter from "./citiesRoutes.js";
import flightsRouter from "./flightsRoutes.js";

const router = Router();
router.use(passengersRouter);
router.use(citiesRouter);
router.use(flightsRouter);

export default router;