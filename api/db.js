import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"Twchy1cydalT$",
    database:"db_ucrm"
})