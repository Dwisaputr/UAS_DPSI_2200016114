const trackOrder = async (req, res) => {
    const { orderId } = req.body;
    const orderDoc = await db.collection('orders').doc(orderId).get();
    if (!orderDoc.exists) return res.status(404).json({ message: 'Order not found' });
  
    const order = orderDoc.data();
    // Here you would normally integrate with a logistics service
    // For simplicity, let's assume we have order status in the order document
    res.status(200).json({ status: order.status, details: order.details });
  };
  
  module.exports = { trackOrder };
  