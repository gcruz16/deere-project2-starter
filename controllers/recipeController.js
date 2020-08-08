const express = require("express");
const router = express.Router();

const RecipeModel = require("../models").Recipe;

//put this above your show.ejs file
router.get("/new", (req, res) => {
	res.render("new.ejs");
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
		res.render("show.ejs", {
			recipe: singleRecipe,
		});
	});
});

router.get("/:id/edit", (req, res) => {
	RecipeModel.findByPk(req.params.id).then((recipe) => {
		res.render("edit.ejs", {
			recipe: recipe,
		});
	});
});

//Edit Recipe (button)
router.put("/:id", (req, res) => {
	RecipeModel.update(req.body, { where: { id: req.params.id } }).then(
		(updatedRecipe) => {
			console.log(updatedRecipe);
			res.redirect("/");
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
