'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Consejo = sequelize.define('Consejo', {
    titulo: DataTypes.STRING,
    contenido: DataTypes.TEXT,
  }, {
    tableName: 'Consejos',
    timestamps: true,
  });

  return Consejo;
  
};