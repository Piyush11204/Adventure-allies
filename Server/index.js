require('dotenv').config();
const express = require('express');
const cors = require("cors");
const path = require('path');
const connection = require("./db");
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const locationRoutes = require('./routes/addLocation');

const app = express();

// Database connection
connection();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/addlocation', locationRoutes); // Ensure this route is correct

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
