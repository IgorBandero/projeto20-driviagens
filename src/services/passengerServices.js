import { insertPassenger } from "../repositories/passengerRepository.js";

async function registerPassenger(firstName, lastName){
    return insertPassenger(firstName, lastName);
}

export const passengerService = { registerPassenger }; 