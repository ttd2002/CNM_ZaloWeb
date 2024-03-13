import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import connectToMongoDB from "./database/connectToMongoDB.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json()); //parse the incoming request with JSON payloads (from req.body)

app.listen(PORT, () => {
    connectToMongoDB();//connect to MongoDB
    console.log(`Server is running on port ${PORT}`);
});

// app.get("/", (req, res) => {
//root route of the server http://localhost:8000
// });

app.use("/api/auth", authRoutes);
