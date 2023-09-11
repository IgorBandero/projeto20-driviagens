import { insertFlight } from "../repositories/flightsRepository.js";
import { conflict, notFound, unprocessableEntity } from "../errors/errors.js";
import { findCityById } from "../repositories/citiesRepository.js";
import dayjs from "dayjs";
import { format, parseISO } from 'date-fns';

async function registerFlight(origin, destination, date){

    const cityOrigin = await findCityById(origin);
    if (cityOrigin.rowCount === 0) throw notFound("Origin city not found!");

    const cityDestination = await findCityById(destination); 
    if (cityDestination.rowCount === 0) throw notFound("Destination city not found!");    

    if (cityOrigin.rows[0].name === cityDestination.rows[0].name) throw conflict("Invalid destination city!");

    // Divida a string em dia, mês e ano
    const splitedDate = date.split('-');
    const day = parseInt(splitedDate[0]);
    const month = parseInt(splitedDate[1]); 
    const year = parseInt(splitedDate[2]);
    const isoDate = new Date(year, month, day);
    if (dayjs().isAfter(isoDate)) throw unprocessableEntity("Invalid flight date!");    

    return insertFlight(origin, destination, isoDate);
}
export const flightsServices = { registerFlight }; 