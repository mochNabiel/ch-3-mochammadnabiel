const express = require('express');
const carsRouter = require('./cars');

const router = express.Router();

router.use('/cars', carsRouter);
router.get('/', (req, res) => {
  res.json({ message: 'ping successfully' });
});

module.exports = router;
