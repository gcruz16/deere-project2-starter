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
			name_recipe: {
				allowNull: false,
				unique: true,
				type: Sequelize.STRING,
			},
			preparation_time: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			cooking_time: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			difficulty: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			serves: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			img: {
				allowNull: false,
				type: Sequelize.STRING,
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
