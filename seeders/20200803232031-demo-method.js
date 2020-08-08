"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("Methods", [
			{
				id: 1,
				id_step: 1,
				description: "Step 1",
			},
			{
				id: 1,
				id_step: 2,
				description: "Step 2",
			},
			{
				id: 1,
				id_step: 3,
				description: "Step 3",
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Methods", null, {});
	},
};
