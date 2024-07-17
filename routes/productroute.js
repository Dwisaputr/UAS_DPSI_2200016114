const express = require('express');
const { addProduct, updateProduct, deleteProduct, getProducts } = require('../controllers/productcontroller');
const authMiddleware = require('../middlewares/authmiddleware');
const router = express.Router();

router.post('/add', authMiddleware('petani'), addProduct);
router.put('/update', authMiddleware('petani'), updateProduct);
router.delete('/delete', authMiddleware('petani'), deleteProduct);
router.get('/', authMiddleware('petani'), getProducts);

module.exports = router;
