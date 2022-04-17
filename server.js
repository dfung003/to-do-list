require('dotenv').config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;
const Task = require('./models/tasks');

// Connect to database
require("./config/database.js");

const app = express();

app.use(logger("dev"));
app.use(express.json());

// Middleware

app.use(express.static(path.join(__dirname, 'build')));

// API routes
app.post('/api/tasks', async (req, res) => {
    try {
        const task = await Task.create(req.body);

        res.status(200).json(task);
    } catch (e) {
        res.status(400).json(e);
    }
})

// Catch all route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.listen(port, () => {
    console.log(`Express app running on port ${port}`)
});