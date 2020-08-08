'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Qty_ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Qty_ingredient.init({
    qty: DataTypes.INTEGER,
    unit_of_measure: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Qty_ingredient',
  });
  return Qty_ingredient;
};