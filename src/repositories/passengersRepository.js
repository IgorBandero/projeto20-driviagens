import { db } from "../database/databaseConection.js";

export async function insertPassenger(firstName, lastName){
    return db.query(`INSERT INTO passengers (firstName, lastName) VALUES ($1, $2);`, [firstName, lastName]);
}

export async function findPassengerById(id){
    return db.query(`SELECT * FROM passengers WHERE id = $1`, [id]);
}