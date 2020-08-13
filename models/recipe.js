"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Recipe extends Model {
		static associate(models) {
			Recipe.hasMany(models.Instruction, { foreignKey: "id_recipe" });
			Recipe.hasMany(models.Ingredient, { foreignKey: "id_recipe" });
		}
	}
	Recipe.init(
		{
			id_recipe: DataTypes.INTEGER,
			name_recipe: DataTypes.STRING,
			preparation_time: DataTypes.INTEGER,
			cooking_time: DataTypes.INTEGER,
			difficulty: DataTypes.STRING,
			serves: DataTypes.INTEGER,
			img: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Recipe",
		}
	);
	return Recipe;
};
