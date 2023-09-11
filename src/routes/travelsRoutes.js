import { Router } from "express";
import { validationSchema } from "../middlewares/validationSchemas.js";
import { travelSchema } from "../schemas/travelSchema.js";
import { newTravel } from "../controllers/travelsControllers.js";

const travelsRouter = Router();
travelsRouter.post("/travels", validationSchema(travelSchema), newTravel);

export default travelsRouter;