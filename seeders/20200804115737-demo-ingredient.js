"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("Ingredients", [
			{
				ingredient_description: "Eggs",
				id_recipe: 1,
			},
			{
				ingredient_description: "Cocoa",
				id_recipe: 1,
			},
			{
				ingredient_description:
					"Wheat flour, white, all purpose,enriched,blached",
				id_recipe: 1,
			},
			{
				ingredient_description: "Baking soda",
				id_recipe: 1,
			},
			{
				ingredient_description: "Butter with salt",
				id_recipe: 1,
			},
			{
				ingredient_description: "Sugar,granulated",
				id_recipe: 1,
			},
			{
				ingredient_description: "Cofee,brewed, prepared, with tap water",
				id_recipe: 1,
			},
			{
				ingredient_description: "Milk",
				id_recipe: 1,
			},
			{
				ingredient_description: "Canned,evaporated Milk",
				id_recipe: 1,
			},
			{
				ingredient_description: "Vanilla extract",
				id_recipe: 1,
			},
			{
				ingredient_description: "Oil",
				id_recipe: 1,
			},
			{
				ingredient_description: "Duncan Hines chocolate Devil´s",
				id_recipe: 1,
			},
			{
				ingredient_description: "Condensed milk",
				id_recipe: 1,
			},
			{
				ingredient_description: "Caramel",
				id_recipe: 1,
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Ingredients", null, {});
	},
};
