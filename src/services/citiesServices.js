import { insertCity, findCityByName } from "../repositories/citiesRepository.js";
import { conflict } from "../errors/conflictError.js"

async function registerCity(name){

    const city = await findCityByName(name.toUpperCase());
    if (city.rowCount !== 0) throw conflict("City");    
    return insertCity(name);
}

export const citiesServices = { registerCity }; 