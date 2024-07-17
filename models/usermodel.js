const { db } = require('../firebase');

const userCollection = db.collection('users');

const createUser = async (user) => {
  await userCollection.doc(user.id).set(user);
};

const getUserByEmail = async (email) => {
  const snapshot = await userCollection.where('email', '==', email).get();
  return snapshot.empty ? null : snapshot.docs[0].data();
};

const getUserById = async (id) => {
  const doc = await userCollection.doc(id).get();
  return doc.exists ? doc.data() : null;
};

module.exports = { createUser, getUserByEmail, getUserById };
