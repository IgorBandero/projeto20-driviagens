import httpStatus from "http-status";
import { travelsServices } from "../services/travelsServices.js";

export async function newTravel (req, res){

    const travel = req.body;        
    const { passengerId, flightId } = travel;  
    
    await travelsServices.registerTravel(passengerId, flightId);    
    res.status(httpStatus.CREATED).send("New travel created!");
}
