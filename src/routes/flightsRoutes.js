import { Router } from "express";
import { validationSchema } from "../middlewares/validationSchemas.js";
import { flightSchema } from "../schemas/flightSchemas.js";
import { newFlight } from "../controllers/flightsControllers.js";

const flightsRouter = Router();
flightsRouter.post("/flights", validationSchema(flightSchema), newFlight);

export default flightsRouter;