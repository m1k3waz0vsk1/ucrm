import express from "express"
import { factory } from "../controllers/factory.js"

const router = express.Router()

router.post("/factory", factory);

export default router
