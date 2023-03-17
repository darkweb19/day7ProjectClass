//!task for category
const express = require("express");
const Category = require("./Category");
const app = express();

app.use(express.urlencoded({ extended: true }));
//get category
app.get("/categories", (req, res) => {
	res.send(Category.find());
});

//add category
app.post("/add-category", (req, res) => {
	if (req.body) {
		const category = new Category(req.body);
		category.save();
		res.send("Category added");
	} else {
		res.send("please provide the information");
	}
});

//delete category
app.get("/delete-category", (req, res) => {
	if (req.query.id) {
		Category.deleteById(req.query.id);
		res.send("User Deleted");
	} else {
		res.send("Please provide a id");
	}
});
app.listen(4000, () => {
	console.log("Server Started at port 3000");
});
