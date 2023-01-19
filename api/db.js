import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user:"ucrm",
    password:"Twchy1cydalT$",
    database:"db_ucrm"
})