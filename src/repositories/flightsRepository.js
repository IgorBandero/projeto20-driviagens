import { db } from "../database/databaseConection.js";

export async function insertFlight(origin, destination, date){
    return db.query(`INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`, 
    [origin, destination, date]);
}


export async function findFlightById(id){
    return db.query(`SELECT * FROM flights WHERE id = $1`, [id]);
}