'use strict';
const {
  Model
} = require('sequelize');module.exports = (sequelize, DataTypes) => {
  const Departamento = sequelize.define('Departamento', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
  }, {
    tableName: 'Departamentos',
    timestamps: true,
  });

  return Departamento;
};