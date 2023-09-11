import { Router } from "express";

import passengersRouter from "./passengersRoutes.js";
import citiesRouter from "./citiesRoutes.js";

const router = Router();
router.use(passengersRouter);
router.use(citiesRouter);

export default router;