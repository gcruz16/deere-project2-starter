"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Method_ingredient extends Model {
		static associate(models) {
			// define association here
		}
	}
	Method_ingredient.init(
		{
			id_method: DataTypes.INTEGER,
			id_ingredient: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Method_ingredient",
		}
	);
	return Method_ingredient;
};
