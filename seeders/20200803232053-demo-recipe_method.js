"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("Recipe_methods", [
			{
				id_recipe: 1,
				id_method: 1,
			},
			{
				id_recipe: 2,
				id_method: 1,
			},
			{
				id_recipe: 2,
				id_method: 2,
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Recipe_methods", null, {});
	},
};
