import joiBase from "joi"
import joiDate from "@joi/date"

const Joi = joiBase.extend(joiDate);

export const flightSchema = Joi.object({
    origin: Joi.number().integer().positive().required(),
	destination: Joi.number().integer().positive().required(),
    date: Joi.date().format(['DD-MM-YYYY']).required()
});
