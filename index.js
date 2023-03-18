// const express = require("express");
// const uuid = require("uuid").v4;
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// let users = [
// 	{ id: uuid(), name: "Sujan", age: 12 },
// 	{ id: uuid(), name: "prakanda", age: 13 },
// ];

// //get method to see the users
// app.get("/users", (req, res) => {
// 	// console.log(users);
// 	res.send(users);
// });

// //post method to add the user from body of the page
// app.post("/add-user", (req, res) => {
// 	if (req.body.name && req.body.age) {
// 		users.push({
// 			id: uuid(),
// 			name: req.body.name,
// 			age: req.body.age,
// 		});
// 		res.send("User added");
// 	} else {
// 		res.send("Please provide name");
// 	}
// });
// get method to delete a user
// app.get("/delete-user", (req, res) => {
// 	if (req.query.id) {
// 		users = users.filter((user) => {
// 			return user.id != req.query.id;
// 		});
// 		res.send("user deleted");
// 	} else {
// 		res.send("please provide an id");
// 	}
// });

// app.listen(3000, () => {
// 	console.log("Server is at post 3000 :");
// });

//!task  Implementing from class
const express = require("express");
const app = express();
const User = require("./User");
app.use(express.urlencoded({ extended: true }));

//get user
app.get("/user", (req, res) => {
	res.send(User.find());
});

//add user
app.post("/add-user", (req, res) => {
	try {
		const user = new User(req.body);
		user.save();
		res.send("User added");
	} catch (err) {
		res.send(err.message);
	}
});

//delete user
app.get("/delete-user", (req, res) => {
	User.deleteById(req.query.id);
	res.send("User deleted");
});

app.listen(3000, () => {
	console.log("Server started at 3000");
});
