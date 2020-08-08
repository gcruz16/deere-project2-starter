"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("Qty_ingredients", [
			{
				qty: 3,
				unit_of_measure: "pcs",
			},
			{
				qty: 6,
				unit_of_measure: "pcs",
			},
			{
				qty: 5,
				unit_of_measure: "pcs",
			},
			{
				qty: 1,
				unit_of_measure: "pkg",
			},
			{
				qty: 2,
				unit_of_measure: "pkg",
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Qty_ingredients", null, {});
	},
};
