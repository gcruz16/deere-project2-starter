"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Recipe extends Model {
		static associate(models) {
			Recipe.belongsToMany(models.Method, {
				through: "recipe_methods",
				foreignKey: "id",
				otherKey: "id_method",
			});
		}
	}

	Recipe.init(
		{
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
