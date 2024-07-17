const express = require('express');
const { processPayment } = require('../controllers/paymentcontroller');
const authMiddleware = require('../middlewares/authmiddleware');
const router = express.Router();

router.post('/pay', authMiddleware('pelanggan'), processPayment);

module.exports = router;
