import { Router } from "express";
import { validationSchema } from "../middlewares/validationSchemas.js";
import { citySchema } from "../schemas/citySchemas.js";
import { newCity } from "../controllers/citiesControllers.js";

const citiesRouter = Router();
citiesRouter.post("/cities", validationSchema(citySchema), newCity);

export default citiesRouter;