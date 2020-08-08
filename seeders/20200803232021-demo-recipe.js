"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("Recipes", [
			{
				name_recipe: "Impossible cake",
				preparation_time: 30,
				cooking_time: 60,
				difficulty: "Medium",
				serves: 15,
				img:
					"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/12/1/VM0106_Chocoflan_s4x3.jpg.rend.hgtvcom.826.620.suffix/1485536949757.jpeg",
			},
			{
				name_recipe: "Strawberry cake",
				preparation_time: 40,
				cooking_time: 40,
				difficulty: "Medium",
				serves: 20,
				img:
					"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chocolate-strawberry-cake-1585318865.jpg",
			},
			{
				name_recipe: "Carrot cake",
				preparation_time: 40,
				cooking_time: 40,
				difficulty: "Medium",
				serves: 20,
				img:
					"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/2/16/0/ry0401_carrotcake.jpg.rend.hgtvcom.826.620.suffix/1552488933139.jpeg",
			},
			{
				name_recipe: "Cheese cake",
				preparation_time: 20,
				cooking_time: 30,
				difficulty: "Easy",
				serves: 15,
				img:
					"https://assets.kraftfoods.com/recipe_images/opendeploy/74140_640x428.jpg",
			},
			{
				name_recipe: "Chocolate cake",
				preparation_time: 15,
				cooking_time: 40,
				difficulty: "Easy",
				serves: 15,
				img:
					"https://iambaker.net/wp-content/uploads/2016/04/rosette-cake-sice-300x300.jpg",
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Recipes", null, {});
	},
};
