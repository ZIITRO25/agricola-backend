'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Cultivo = sequelize.define('Cultivo', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    fecha_plantacion: DataTypes.DATE,
  }, {
    tableName: 'Cultivos',
    timestamps: true,
  });

  return Cultivo;
};