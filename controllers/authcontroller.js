const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/jwt');
const { createUser, getUserByEmail } = require('../models/usermodel');

const register = async (req, res) => {
  const { email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    id: email,
    email,
    password: hashedPassword,
    role,
  };

  await createUser(user);
  res.status(201).json({ message: 'User registered successfully' });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) return res.status(400).json({ message: 'Invalid credentials' });

  const token = generateToken({ id: user.id, role: user.role });
  res.status(200).json({ token });
};

module.exports = { register, login };
