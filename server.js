require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const RecipeModel = require("./models").Recipe;

const verifyToken = (req, res, next) => {
	let token = req.cookies.jwt;
	// COOKIE PARSER GIVES YOU A .cookies PROP, WE NAMED OUR TOKEN jwt

	console.log("Cookies: ", req.cookies.jwt);

	jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
		if (err || !decodedUser) {
			return res.status(401).json({ error: "Unauthorized Request" });
		}
		req.user = decodedUser;
		// ADDS A .user PROP TO REQ FOR TOKEN USER
		console.log(decodedUser);

		next();
	});
};

//THESE ARE PACKAGES THAT WE NPM INSTALLED
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// HOMEPAGE (ROUTE)
// app.get("/", (req, res) => {
// 	res.render("users/index.ejs");
// });
app.get("/", (req, res) => {
	console.log("index route");
	RecipeModel.findAll().then((allRecipesFromDB) => {
		console.log("INDEX ROUTE");
		res.render("users/index.ejs", {
			recipes: allRecipesFromDB,
		});
	});
});

//THESE ARE ROUTES THAT WE CREATED
app.use("/auth", require("./controllers/authController.js"));
// app.use("/users", require("./controllers/usersController.js"));
app.use("/users", verifyToken, require("./controllers/usersController.js"));
app.use("/recipes", require("./controllers/recipeController.js"));

app.listen(process.env.PORT, () => {
	console.log("Nodemon listening");
});
