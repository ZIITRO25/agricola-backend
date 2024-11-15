
const { Cultivo } = require('../models');

const cultivoController = {
  getAll: async (req, res) => {
    try {
      const cultivos = await Cultivo.findAll();
      res.json(cultivos);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching cultivos' });
    }
  },

  getById: async (req, res) => { 
    try {
      const cultivo = await Cultivo.findByPk(req.params.id);
      if (!cultivo) return res.status(404).json({ error: 'Cultivo not found' });
      res.json(cultivo);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching cultivo' });
    }
  },

  create: async (req, res) => {
    try {
      const { nombre, descripcion, fecha_plantacion } = req.body;
      const newCultivo = await Cultivo.create({ nombre, descripcion, fecha_plantacion });
      res.status(201).json(newCultivo);
    } catch (error) {
      res.status(500).json({ error: 'Error creating cultivo' });
    }
  },

  update: async (req, res) => {
    try {
      const cultivo = await Cultivo.findByPk(req.params.id);
      if (!cultivo) return res.status(404).json({ error: 'Cultivo not found' });
      const { nombre, descripcion, fecha_plantacion } = req.body;
      await cultivo.update({ nombre, descripcion, fecha_plantacion });
      res.json(cultivo);
    } catch (error) {
      res.status(500).json({ error: 'Error updating cultivo' });
    }
  },

  delete: async (req, res) => {
    try {
      const cultivo = await Cultivo.findByPk(req.params.id);
      if (!cultivo) return res.status(404).json({ error: 'Cultivo not found' });
      await cultivo.destroy();
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Error deleting cultivo' });
    }
  }
};

module.exports = cultivoController;
