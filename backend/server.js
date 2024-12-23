require('dotenv').config(); 
const express = require('express');
const connectDB = require('./config/database');
const registrationRoutes = require('./routes/registration');
const dashboardRoutes = require('./routes/dashboard');
const landingRoutes = require('./routes/landing');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api/auth', registrationRoutes); 
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/landing', landingRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
