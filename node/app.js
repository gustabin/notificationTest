import express from "express";
import cors from "cors";
import db from "./database/db.js";
import userRoutes from "./routes/routes.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use('/message', userRoutes)

try {
    await db.authenticate()
    console.log('Connection successful to DB')
} catch (error) {
    console.log(`Connection error: ${error}`)
}

app.get("/", (req, res) => {
    res.send('Hello world')
});

app.post("/message", (req, res) => {
    res.send('message')
});


export default app