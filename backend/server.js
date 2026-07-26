import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON payloads

// Sample API Test Route
app.get('/api/health', (req, res) => {
    res.json({ status: "Backend is operational!" });
});

// Database and Server Init
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/merndb';
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Connected securely to MongoDB.");
        app.listen(PORT, () => console.log(`Server executing on port ${PORT}`));
    })
    .catch(err => console.error("Database initialization failed:", err));
