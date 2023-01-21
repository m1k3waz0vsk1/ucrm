import express from "express"
import {
    deleteClient,
    getClient,
    getClients,
    postClient,
    updateClient
} from "../controllers/clients.js"
import {db} from "../db.js"

const router = express.Router();

router.get("/", getClients);
router.get("/:id", getClient);
router.post("/", postClient)
router.delete("/:id", deleteClient)
router.put("/:id", updateClient)

export default router

