"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Method_ingredients", {
			id_method: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			id_ingredient: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			id_qty: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.INTEGER,
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
		await queryInterface.dropTable("Method_ingredients");
	},
};
