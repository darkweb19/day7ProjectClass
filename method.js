//!combination of url = method + url

const User = require("./User");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.redirect("/user");
});

app.get("/user", (req, res) => {
	const users = User.find();
	res.send(`
    <a href= "/user/create">Create User</a>
    <table border=1>
        <tr>
            <th>SN</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>Action</th>
        </tr>
        ${users
			.map((user, i) => {
				return `
            <tr>
                <td>${i + 1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td><a href="/delete-user/${user.id}">Delete</a></td>
            </tr>
            `;
			})
			.join("")}
    </table>
    `);
});

app.get("/user/create", (req, res) => {
	res.send(`
        <form method= "POST" action="/user">
            <input type="text" name = "name" placeholder = "name">
            <br>
            <input type="text" name = "email" placeholder = "email">
            <br>
            <button type = "submit">ADD</button>
        </form>
    `);
});

app.post("/user", (req, res) => {
	try {
		const user = new User(req.body);
		user.save();
		res.redirect("/user");
	} catch (err) {
		res.send(err.message);
		res.redirect("/user");
	}
});

app.get("/delete-user/:id", (req, res) => {
	// console.log(req.params.id);
	User.deleteById(req.params.id);
	res.redirect("/user");
});

app.listen(3000, () => {
	console.log("server at 3000");
});
