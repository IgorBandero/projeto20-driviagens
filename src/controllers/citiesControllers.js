import httpStatus from "http-status";
import { citiesServices } from "../services/citiesServices.js";

export async function newCity (req, res){

    const city = req.body;        
    const { name } = city;     
    
    await citiesServices.registerCity(name.toUpperCase());    
    res.status(httpStatus.CREATED).send("New city created!");
}