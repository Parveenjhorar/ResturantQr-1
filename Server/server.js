import express from "express";
import connectDB from "./config/db.js";

const app = express();
connectDB();

app.use(express.json());

// app.get("/", (req, res) => res.send("API running"));

app.listen(5000, () => console.log("Server running on port 5000"));
