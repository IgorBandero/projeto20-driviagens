import { Router } from "express";
import { validationSchema } from "../middlewares/validationSchemas.js";
import { passengerSchema } from "../schemas/passengerSchemas.js";
import { newPassenger } from "../controllers/passengerController.js";

const passengerRouter = Router();
passengerRouter.post("/passengers", validationSchema(passengerSchema), newPassenger);

export default passengerRouter;