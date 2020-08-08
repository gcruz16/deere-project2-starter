"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Recipe_method extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Recipe_method.init(
		{
			id_recipe: DataTypes.INTEGER,
			id_method: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Recipe_method",
		}
	);
	return Recipe_method;
};
