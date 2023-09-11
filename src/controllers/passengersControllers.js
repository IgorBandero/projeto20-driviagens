import httpStatus from "http-status";
import { passengersServices } from "../services/passengersServices.js";

export async function newPassenger (req, res){

    const passenger = req.body;        
    const { firstName, lastName } = passenger;  
    
    await passengersServices.registerPassenger(firstName, lastName);    
    res.status(httpStatus.CREATED).send("New passenger created!");
}
