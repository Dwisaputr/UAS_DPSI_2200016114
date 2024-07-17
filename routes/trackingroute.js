const express = require('express');
const { trackOrder } = require('../controllers/trackingcontroller');
const authMiddleware = require('../middlewares/authmiddleware');
const router = express.Router();

router.post('/track', authMiddleware(), trackOrder);

module.exports = router;
