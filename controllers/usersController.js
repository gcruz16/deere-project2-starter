const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
	UserModel.findByPk(req.params.id).then((userProfile) => {
		res.render("users/profile.ejs", {
			user: userProfile,
		});
	});
});

//ROUTE PUT Receive updated form data  Edit profile
router.put("/profile/:id", (req, res) => {
	// users[req.params.index] = req.body; //replace object
	// res.redirect(`/users/profile/${req.params.index}`);
	UserModel.update(req.body, {
		where: { id: req.params.id },
		returning: true,
	}).then((userProfile) => {
		//redirect to the index page
		res.redirect(`/users/profile/${req.params.id}`);
	});
});

//DELETE ROUTE
router.delete("/:id", (req, res) => {
	//remove the item from the array
	UserModel.destroy({ where: { id: req.params.id } }).then(() => {
		res.redirect("/");
	});
});
module.exports = router;
