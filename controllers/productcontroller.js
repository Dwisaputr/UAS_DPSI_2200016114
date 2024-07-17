const { db } = require('../firebase');

const addProduct = async (req, res) => {
  const { name, description, price } = req.body;
  const product = { name, description, price, farmerId: req.user.id };
  await db.collection('products').add(product);
  res.status(201).json({ message: 'Product added successfully' });
};

const updateProduct = async (req, res) => {
  const { id, name, description, price } = req.body;
  await db.collection('products').doc(id).update({ name, description, price });
  res.status(200).json({ message: 'Product updated successfully' });
};

const deleteProduct = async (req, res) => {
  const { id } = req.body;
  await db.collection('products').doc(id).delete();
  res.status(200).json({ message: 'Product deleted successfully' });
};

const getProducts = async (req, res) => {
  const snapshot = await db.collection('products').where('farmerId', '==', req.user.id).get();
  const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.status(200).json(products);
};

module.exports = { addProduct, updateProduct, deleteProduct, getProducts };
