"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Instruction extends Model {
		static associate(models) {
			Instruction.belongsTo(models.Recipe, { foreignKey: "id_recipe" });
		}
	}
	Instruction.init(
		{
			id_step: DataTypes.INTEGER,
			description: DataTypes.TEXT,
			id_recipe: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Instruction",
		}
	);
	return Instruction;
};
