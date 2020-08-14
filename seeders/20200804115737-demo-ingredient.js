"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("Ingredients", [
			{
				qty: 2,
				unit_of_measure: "pc",
				ingredient_description: "Eggs",
				id_recipe: 1,
			},
			{
				qty: 6,
				unit_of_measure: "tablespoons",
				ingredient_description: "Cocoa",
				id_recipe: 1,
			},
			{
				qty: 2,
				unit_of_measure: "cups",
				ingredient_description:
					"Wheat flour, white, all purpose,enriched,blached",
				id_recipe: 1,
			},
			{
				qty: 1,
				unit_of_measure: "teaspoon",
				ingredient_description: "Baking soda",
				id_recipe: 1,
			},
			{
				qty: 1,
				unit_of_measure: "cup",
				ingredient_description: "Butter with salt",
				id_recipe: 1,
			},
			{
				qty: 1,
				unit_of_measure: "cup",
				ingredient_description: "Sugar,granulated",
				id_recipe: 1,
			},
			{
				qty: 2,
				unit_of_measure: "tablespoons",
				ingredient_description: "Cofee,brewed, prepared, with tap water",
				id_recipe: 1,
			},
			{
				qty: 1,
				unit_of_measure: "cup",
				ingredient_description: "Milk",
				id_recipe: 1,
			},
			{
				qty: 1,
				unit_of_measure: "pc",
				ingredient_description: "Canned,evaporated Milk",
				id_recipe: 1,
			},
			{
				qty: 1,
				unit_of_measure: "teaspoon",
				ingredient_description: "Vanilla extract",
				id_recipe: 1,
			},
			{
				qty: 1,
				unit_of_measure: "cup",
				ingredient_description: "Oil",
				id_recipe: 1,
			},
			{
				qty: 1,
				unit_of_measure: "pkg",
				ingredient_description: "Duncan Hines chocolate Devil´s",
				id_recipe: 1,
			},
			{
				qty: 1,
				unit_of_measure: "pc",
				ingredient_description: "Condensed milk",
				id_recipe: 1,
			},
			{
				qty: 1,
				unit_of_measure: "cup",
				ingredient_description: "Caramel",
				id_recipe: 1,
			},
			{
				qty: 1,
				unit_of_measure: "pkg",
				ingredient_description: "white cake mix (regular size)",
				id_recipe: 2,
			},
			{
				qty: 1,
				unit_of_measure: "pkg",
				ingredient_description: "strawberry gelatin",
				id_recipe: 2,
			},

			{
				qty: 3,
				unit_of_measure: "tablespoons",
				ingredient_description: "sugar",
				id_recipe: 2,
			},
			{
				qty: 3,
				unit_of_measure: "tablespoons",
				ingredient_description: "all-purpose flour",
				id_recipe: 2,
			},
			{
				qty: 1,
				unit_of_measure: "cup",
				ingredient_description: "water",
				id_recipe: 2,
			},
			{
				qty: 1,
				unit_of_measure: "cup",
				ingredient_description: "canola oil",
				id_recipe: 2,
			},
			{
				qty: 2,
				unit_of_measure: "pc",
				ingredient_description: "large eggs,room temperature",
				id_recipe: 2,
			},
			{
				qty: 1,
				unit_of_measure: "cup",
				ingredient_description: "finely chopped strawberries",
				id_recipe: 2,
			},
			{
				qty: 1,
				unit_of_measure: "cup",
				ingredient_description: " butter, softened",
				id_recipe: 2,
			},
			{
				qty: 1,
				unit_of_measure: "cup",
				ingredient_description: "crushed strawberries",
				id_recipe: 2,
			},
			{
				qty: 5,
				unit_of_measure: "cups",
				ingredient_description: "confectioners' sugar",
				id_recipe: 2,
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Ingredients", null, {});
	},
};
