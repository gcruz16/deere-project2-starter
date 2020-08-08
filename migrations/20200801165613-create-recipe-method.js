"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Recipe_methods", {
			id_recipe: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			id_method: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
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
		await queryInterface.dropTable("Recipe_methods");
	},
};
