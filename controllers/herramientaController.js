
const { Herramienta } = require('../models');

const herramientaController = {
  getAll: async (req, res) => {
    try {
      const herramientas = await Herramienta.findAll();
      res.json(herramientas);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching herramientas' });
    }
  },

  getById: async (req, res) => { 
    try {
      const herramienta = await Herramienta.findByPk(req.params.id);
      if (!herramienta) return res.status(404).json({ error: 'Herramienta not found' });
      res.json(herramienta);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching herramienta' });
    }
  },

  create: async (req, res) => {
    try {
      const { nombre, descripcion, cantidad } = req.body;
      const newHerramienta = await Herramienta.create({ nombre, descripcion, cantidad });
      res.status(201).json(newHerramienta);
    } catch (error) {
      res.status(500).json({ error: 'Error creating herramienta' });
    }
  },

  update: async (req, res) => {
    try {
      const herramienta = await Herramienta.findByPk(req.params.id);
      if (!herramienta) return res.status(404).json({ error: 'Herramienta not found' });
      const { nombre, descripcion, cantidad } = req.body;
      await herramienta.update({ nombre, descripcion, cantidad });
      res.json(herramienta);
    } catch (error) {
      res.status(500).json({ error: 'Error updating herramienta' });
    }
  },

  delete: async (req, res) => {
    try {
      const herramienta = await Herramienta.findByPk(req.params.id);
      if (!herramienta) return res.status(404).json({ error: 'Herramienta not found' });
      await herramienta.destroy();
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Error deleting herramienta' });
    }
  }
};

module.exports = herramientaController;
