const express = require("express");
const router = express.Router();

const RecipeModel = require("../models").Recipe;
const User = require("../models").User;
const Ingredient = require("../models").Ingredient;
const Instruction = require("../models").Instruction;

//new ingredient route
router.get("/new", (req, res) => {
	res.render("new_ingredient.ejs");
});

//Route for a new recipe
router.post("/", (req, res) => {
	RecipeModel.create(req.body).then((newRecipe) => {
		res.redirect(`/recipes/${newRecipe.id}`);
	});
});

//Show route
router.get("/:id", (req, res) => {
	RecipeModel.findByPk(req.params.id).then((singleRecipe) => {
		Ingredient.findAll({ where: { id_recipe: req.params.id } }).then(
			(allIngredient) => {
				Instruction.findAll({ where: { id_recipe: req.params.id } }).then(
					(allInstructions) => {
						res.render("show.ejs", {
							recipe: singleRecipe,
							ingredients: allIngredient,
							instructions: allInstructions,
						});
					}
				);
			}
		);
	});
});

router.get("/:id/edit", function (req, res) {
	RecipeModel.findByPk(req.params.id).then((foundRecipe) => {
		Ingredient.findAll({ where: { id_recipe: req.params.id } }).then(
			(allIngredient) => {
				Instruction.findAll({ where: { id_recipe: req.params.id } }).then(
					(allInstructions) => {
						res.render("edit.ejs", {
							recipe: foundRecipe,
							ingredients: allIngredient,
							instructions: allInstructions,
						});
					}
				);
			}
		);
	});
});

//Edit Recipe (button)
router.put("/:id", (req, res) => {
	console.log("edit option");
	RecipeModel.update(req.body, { where: { id: req.params.id } }).then(
		(updatedRecipe) => {
			Ingredient.update(req.body, { where: { id_recipe: req.params.id } }).then(
				(foundIngredient) => {
					Instruction.update(req.body, {
						where: { id_recipe: req.params.id },
					}).then((foundInstruction) => {
						res.redirect("/");
					});
				}
			);
		}
	);
});

router.delete("/:id", (req, res) => {
	//remove the item from the array
	RecipeModel.destroy({ where: { id: req.params.id } }).then(() => {
		res.redirect("/");
	});
});

module.exports = router;
