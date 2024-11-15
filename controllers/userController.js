
const { User } = require('../models');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching users' });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching user' });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { username, email } = req.body;
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      await user.update({ username, email });
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error updating user' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      await user.destroy();
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Error deleting user' });
    }
  }
};

module.exports = userController;
