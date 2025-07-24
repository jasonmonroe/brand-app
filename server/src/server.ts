// server.ts
// ==============================================================
// Server Application from Express JS
// @link https://expressjs.com/
// ==============================================================

import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// ----- Server Setup -----
const app = express();
const PORT = process.env.SERVER_PORT || 8000;

app.use(cors());
app.use(express.json());

// Use env variables anywhere.
// req => request, res => response
app.get('/', (req, res) => {
    const appName = process.env.APP_NAME;
    res.send(`${appName} Server is running!`);
});



// ----- Routes -----
// Users
// Promotions
// Storage Files
// Stories
// Flag Reasons
// Discoverables
// Contests

// Define the object data, just like on the client.

// ----- Start Server -----
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
});