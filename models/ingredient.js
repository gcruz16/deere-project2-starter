"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Ingredient extends Model {
		static associate(models) {
			Ingredient.belongsTo(models.Recipe, { foreignKey: "id_recipe" });
		}
	}
	Ingredient.init(
		{
			ingredient_description: DataTypes.TEXT,
			id_recipe: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Ingredient",
		}
	);
	return Ingredient;
};
