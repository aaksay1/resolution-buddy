const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, Node.js Backend!');
});

module.exports = router;