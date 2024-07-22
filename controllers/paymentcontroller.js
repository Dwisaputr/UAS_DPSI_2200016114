const processPayment = async (req, res) => {
  const { orderId, paymentDetails } = req.body;
  // Here you would integrate with a payment gateway
  // For simplicity, let's assume the payment is successful

  await db.collection('orders').doc(orderId).update({ paymentStatus: 'Paid' });
  res.status(200).json({ message: 'Payment successful' });
};
const createOrder = async (req, res) => {
  const { customerId, products, totalAmount } = req.body;
  const order = {
    customerId,
    products,
    totalAmount,
    paymentStatus: 'Pending',
    createdAt: new Date().toISOString()
  };

  const orderRef = await db.collection('orders').add(order);
  res.status(201).json({ message: 'Order created successfully', orderId: orderRef.id });
};


module.exports = { processPayment,createOrder };
