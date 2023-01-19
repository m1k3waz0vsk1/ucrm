import express from "express";
import authRoutes from "./routes/auth.js"
import clientsRoutes from "./routes/clients.js"
import usersRoutes from "./routes/users.js"
import cookieParser from "cookie-parser";

const app = express()

app.use(express.json())
app.use(cookieParser());
app.use("/api/auth", authRoutes)
app.use("/api/clients", clientsRoutes)
app.use("/api/users", usersRoutes)



app.listen(8000, ()=>{
    console.log("Connected")
})