"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Instructions", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			id_step: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				allowNull: false,
			},
			description: {
				type: Sequelize.TEXT,
				allowNull: false,
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
		await queryInterface.dropTable("Instructions");
	},
};
