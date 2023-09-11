import httpStatus from "http-status";
import { flightsServices } from "../services/flightsServices.js";

export async function newFlight (req, res){

    const flight = req.body;        
    const { origin, destination, date } = flight;     
    
    await flightsServices.registerFlight(origin, destination, date);    
    res.status(httpStatus.CREATED).send("New flight created!");
}