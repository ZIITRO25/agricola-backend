
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authController = {
  register: async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
      const existingUsername = await User.findOne({ where: { username } });
      console.log("Existing Username:", existingUsername);

      if (existingUsername) {
        return res.status(400).json({ error: 'Username already in use' });
      }

      const existingEmail = await User.findOne({ where: { email } });
      console.log("Existing Email:", existingEmail);

      if (existingEmail) {
        return res.status(400).json({ error: 'Email already in use' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({ 
        username, 
        email, 
        password: hashedPassword, 
        role: role === 'admin' ? 'admin' : 'user' 
      });
      
      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error during registration:", error);
      res.status(500).json({ error: 'Error registering user' });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      console.log("Attempting login for email:", email); 

      const user = await User.findOne({ where: { email } });
      console.log("User found:", user); 

      if (!user) {
        console.log("No user found with that email.");
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        console.log("Invalid password.");
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.json({ message: 'Login exitoso', token });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: 'Error logging in' });
    }
  }
};

module.exports = authController;
