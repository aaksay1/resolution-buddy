const User = require('../models/user');
const express = require('express');
const router = express.Router();

// // Registration
// router.post('/register', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const newUser = new User({ email, password, score: 0, proposedDares: [], acceptedDares: [] });
//         const savedUser = await newUser.save();
//         res.status(201).json(savedUser);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });


// // Login
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (!user || user.password !== password) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }
//         res.status(200).json({ message: 'Login successful' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });


module.exports = router;