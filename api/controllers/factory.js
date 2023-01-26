import {db} from "../db.js"


export const factory = (req, res) => {
    const q = "SELECT * FROM factory ORDER by factory.name";

    return ("OK");
}