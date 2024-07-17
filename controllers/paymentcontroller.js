const processPayment = async (req, res) => {
  const { orderId, paymentDetails } = req.body;
  // Here you would integrate with a payment gateway
  // For simplicity, let's assume the payment is successful

  await db.collection('orders').doc(orderId).update({ paymentStatus: 'Paid' });
  res.status(200).json({ message: 'Payment successful' });
};

module.exports = { processPayment };
