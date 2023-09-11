import httpStatus from "http-status";
import { passengerService } from "../services/passengerServices.js";

export async function newPassenger (req, res){

    const passenger = req.body;        
    const { firstName, lastName } = passenger;  
    
    await passengerService.registerPassenger(firstName, lastName);    
    res.status(httpStatus.CREATED).send("New passenger created!");
}
