import { insertPassenger } from "../repositories/passengersRepository.js";

async function registerPassenger(firstName, lastName){
    return insertPassenger(firstName, lastName);
}

export const passengersServices = { registerPassenger }; 