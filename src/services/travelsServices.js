import { insertTravel } from "../repositories/travelsRepository.js";
import { findPassengerById } from "../repositories/passengersRepository.js";
import { findFlightById } from "../repositories/flightsRepository.js";
import { conflict, notFound, unprocessableEntity } from "../errors/errors.js";

async function registerTravel(passengerId, flightId){

    const passenger = await findPassengerById(passengerId);
    if (passenger.rowCount === 0) throw notFound("Passenger not found!");

    const flight = await findFlightById(flightId); 
    if (flight.rowCount === 0) throw notFound("Flight not found!");   

    return insertTravel(passengerId, flightId);
}

export const travelsServices = { registerTravel }; 