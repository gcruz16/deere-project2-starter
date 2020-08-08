"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("Ingredients", [
			{
				ingredient_name: "Eggs",
			},
			{
				ingredient_name: "Cocoa",
			},
			{
				ingredient_name: "Wheat flour, white, all purpose,enriched,blached",
			},
			{
				ingredient_name: "Baking soda",
			},
			{
				ingredient_name: "Butter with salt",
			},
			{
				ingredient_name: "Sugar,granulated",
			},
			{
				ingredient_name: "Cofee,brewed, prepared, with tap water",
			},
			{
				ingredient_name: "Milk",
			},
			{
				ingredient_name: "Canned,evaporated Milk",
			},
			{
				ingredient_name: "Vanilla extract",
			},
			{
				ingredient_name: "Oil",
			},
			{
				ingredient_name: "Duncan Hines chocolate Devil´s",
			},
			{
				ingredient_name: "Condensed milk",
			},
			{
				ingredient_name: "Caramel",
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Ingredients", null, {});
	},
};
