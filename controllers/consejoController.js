
const { Consejo } = require('../models');

const consejoController = {
  getAll: async (req, res) => {
    try {
      const consejos = await Consejo.findAll();
      res.json(consejos);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching consejos' });
    }
  },

  getById: async (req, res) => { 
    try {
      const consejo = await Consejo.findByPk(req.params.id);
      if (!consejo) return res.status(404).json({ error: 'Consejo not found' });
      res.json(consejo);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching consejo' });
    }
  },


  create: async (req, res) => {
    try {
      const { titulo, contenido } = req.body;
      const newConsejo = await Consejo.create({ titulo, contenido });
      res.status(201).json(newConsejo);
    } catch (error) {
      res.status(500).json({ error: 'Error creating consejo' });
    }
  },

  update: async (req, res) => {
    try {
      const consejo = await Consejo.findByPk(req.params.id);
      if (!consejo) return res.status(404).json({ error: 'Consejo not found' });
      const { titulo, contenido } = req.body;
      await consejo.update({ titulo, contenido });
      res.json(consejo);
    } catch (error) {
      res.status(500).json({ error: 'Error updating consejo' });
    }
  },

  delete: async (req, res) => {
    try {
      const consejo = await Consejo.findByPk(req.params.id);
      if (!consejo) return res.status(404).json({ error: 'Consejo not found' });
      await consejo.destroy();
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Error deleting consejo' });
    }
  }
};

module.exports = consejoController;
