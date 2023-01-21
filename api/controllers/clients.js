import {db} from "../db.js"


export const getClients = (req, res) => {
    const q = "SELECT * FROM clients"

    db.query(q, [], (err, data) => {
        if (err) return res.send(err);

        return res.status(200).json(data);
    })
}
export const getClient = (req, res) => {
    res.json("from controller")
}
export const postClient = (req, res) => {
    res.json("from controller")
}
export const deleteClient = (req, res) => {
    res.json("from controller")
}
export const updateClient = (req, res) => {
    res.json("from controller")
}