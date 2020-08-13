"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Recipes", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			id_recipe: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				allowNull: false,
			},
			name_recipe: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			preparation_time: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			cooking_time: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			difficulty: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			serves: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			img: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable("Recipes");
	},
};
