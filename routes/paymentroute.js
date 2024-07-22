const express = require('express');
const { processPayment,createOrder } = require('../controllers/paymentcontroller');
const authMiddleware = require('../middlewares/authmiddleware');
const router = express.Router();

router.post('/pay', authMiddleware('pelanggan'), processPayment);
router.post('/order',authMiddleware('pelanggan'), createOrder);

module.exports = router;
