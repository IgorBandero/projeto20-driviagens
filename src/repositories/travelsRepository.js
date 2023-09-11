import { db } from "../database/databaseConection.js";

export async function insertTravel(passengerId, flightId){
    return db.query(`INSERT INTO travels (passengerId, flightId) VALUES ($1, $2);`, [passengerId, flightId]);
}