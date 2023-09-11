import { db } from "../database/databaseConection.js";

export async function insertCity(name){
    return db.query(`INSERT INTO cities (name) VALUES ($1);`, [name]);
}

export async function findCityByName(name){
    return db.query(`SELECT * FROM cities WHERE name = $1;`, [name]);
}

export async function findCityById(id){
    return db.query(`SELECT * FROM cities WHERE id = $1;`, [id]);
}