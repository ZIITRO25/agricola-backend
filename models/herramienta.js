'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Herramienta = sequelize.define('Herramienta', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    cantidad: DataTypes.INTEGER,
  }, {
    tableName: 'Herramientas',
    timestamps: true,
  });

  return Herramienta;
};