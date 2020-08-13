"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("Instructions", [
			{
				description:
					"Preheat oven to 350°F. Lightly oil a 10-inch Bundt pan with non-stick cooking spray. Set aside until needed.",
				id_recipe: 1,
			},
			{
				description:
					" In a medium sauce pan; melt sugar over medium-low heat for 12 to 14 minutes, stirring occasionally, or until sugar is amber colored. *Cook’s note: melted sugar is very hot and must be handled carefully.",
				id_recipe: 1,
			},
			{
				description:
					"Carefully pour melted sugar into prepared Bundt pan. Tilt and rotate pan to coat bottom with caramel. Set aside until needed.",
				id_recipe: 1,
			},
			{
				description:
					"In a large bowl; combine cake mix, eggs, oil, Sour Cream, and mix until all ingredients are fully incorporated. Set aside.",
				id_recipe: 1,
			},
			{
				description:
					" In a food processor; add quartered Queso Fresco Cheese and process for 3 minutes or until no large pieces remain. Add evaporated milk, condensed milk, ½ cup Sour Cream, eggs, vanilla, and process 1 more minute or until there are no visible lumps.",
				id_recipe: 1,
			},
			{
				description:
					" Pour cake batter into prepared Bundt pan and gently pour custard mixture over the cake batter.",
				id_recipe: 1,
			},
			{
				description:
					"Cover loosely with foil, place Bundt pan in large shallow baking dish. Add enough hot water to come 1½-inches up the side of the Bundt pan. Carefully place in oven and bake for 50 to 55 minutes, or until an inserted toothpick comes out clean.",
				id_recipe: 1,
			},
			{
				description:
					"Remove Bundt pan from the baking dish, remove foil, and cool at room temperature until Bundt pan is no longer warm to the touch. Refrigerate for at least one hour. When ready to serve, run a knife around the edge of the cake, place a serving platter over Bundt pan, and carefully flip over.",
				id_recipe: 1,
			},
			{
				description:
					"Combine remaining ½ cup Sour Cream with Mexican coffee-flavored rum in a bowl, mix well until combined. Drizzle Impossible Cake slices with rum sauce, serve, and enjoy.",
				id_recipe: 1,
			},
			{
				description: "Step1",
				id_recipe: 1,
			},
			{
				description: "Step2",
				id_recipe: 1,
			},
			{
				description: "Step3",
				id_recipe: 1,
			},
			{
				description: "Step4",
				id_recipe: 1,
			},
			{
				description: "Step5",
				id_recipe: 1,
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Instructions", null, {});
	},
};
