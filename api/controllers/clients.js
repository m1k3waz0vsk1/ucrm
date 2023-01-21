import {db} from "../db.js"

export const viewClients = (req, res) => {
    const q = "SELECT * FROM clients ORDER by clients.name";

    
}