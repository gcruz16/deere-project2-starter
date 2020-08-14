"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Ingredients", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			ingredient_description: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			qty: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			unit_of_measure: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			id_recipe: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: new Date(),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: new Date(),
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Ingredients");
	},
};
