import {db} from "../db.js"


export const products = (req, res) => {
    const q = "SELECT * FROM products ORDER by products.name";

    return ("OK");
}