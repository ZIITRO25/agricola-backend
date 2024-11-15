
const { Departamento } = require('../models');

const departamentoController = {
  getAll: async (req, res) => {
    try {
      const departamentos = await Departamento.findAll();
      res.json(departamentos);
    } catch (error) {
      console.error("Error al obtener los departamentos:", error);
      res.status(500).json({ error: 'Error al obtener los departamentos' });
    }
  },

  create: async (req, res) => {
    try {
      console.log("Request Body:", req.body); 
      const { nombre, descripcion } = req.body;

      
      if (!nombre || !descripcion) {
        return res.status(400).json({ error: 'El nombre y la descripción son obligatorios' });
      }

      const newDepartamento = await Departamento.create({ nombre, descripcion });
      console.log("Nuevo Departamento Creado:", newDepartamento); 
      res.status(201).json(newDepartamento);
    } catch (error) {
      console.error("Error al crear el departamento:", error);
      res.status(500).json({ error: 'Error al crear el departamento' });
    }
  },

  update: async (req, res) => {
    try {
      const departamento = await Departamento.findByPk(req.params.id);
      if (!departamento) return res.status(404).json({ error: 'Departamento no encontrado' });
      const { nombre, descripcion } = req.body;
      await departamento.update({ nombre, descripcion });
      res.json(departamento);
    } catch (error) {
      console.error("Error al actualizar el departamento:", error);
      res.status(500).json({ error: 'Error al actualizar el departamento' });
    }
  },

  delete: async (req, res) => {
    try {
      const departamento = await Departamento.findByPk(req.params.id);
      if (!departamento) return res.status(404).json({ error: 'Departamento no encontrado' });
      await departamento.destroy();
      res.sendStatus(204);
    } catch (error) {
      console.error("Error al eliminar el departamento:", error);
      res.status(500).json({ error: 'Error al eliminar el departamento' });
    }
  }
};

module.exports = departamentoController;
