import express from "express"
import { clients } from "../controllers/clients.js"

const router = express.Router()

router.post("/clients", clients);

export default router

