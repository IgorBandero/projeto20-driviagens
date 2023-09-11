import { Router } from "express";
import { validationSchema } from "../middlewares/validationSchemas.js";
import { passengerSchema } from "../schemas/passengerSchemas.js";
import { newPassenger } from "../controllers/passengersControllers.js";

const passengersRouter = Router();
passengersRouter.post("/passengers", validationSchema(passengerSchema), newPassenger);

export default passengersRouter;