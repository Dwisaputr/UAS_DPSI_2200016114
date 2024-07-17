require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authroute');
const productRoutes = require('./routes/productroute');
const trackingRoutes = require('./routes/trackingroute');
const paymentRoutes = require('./routes/paymentroute');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/tracking', trackingRoutes);
app.use('/api/payment', paymentRoutes);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
