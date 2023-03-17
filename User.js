//!Task
// class User {
// 	static count = 0;
// 	constructor(name, email) {
// 		this.name = name;
// 		this.email = email;
// 		User.count++;
// 	}
// }

// const ram = new User("Ram", "ram@gmail.com");
// console.log(ram);

// const hari = new User("Hari", "hari@gmail.com");
// console.log(hari);
// const sujan = new User("Sujan", "sujanari@gmail.com");
// console.log(sujan);

// console.log(User.count);

//!Task
const uuid = require("uuid").v4;

//static is used to share the data
class User {
	static #data = [];
	// static #data = [
	// 	{
	// 		id: 1, //assign an unique id
	// 		name: " Sujan",
	// 	},
	// 	{
	// 		id: 2, //assign an unique id
	// 		name: "Prakanda",
	// 	},
	// ];

	static find() {
		return User.#data;
	}

	#temp = {
		id: uuid(),
	};

	constructor(data) {
		if (!data.name || !data.email) {
			throw new Error("Reqired data are missing");
		}
		this.#temp.name = data.name;
		this.#temp.email = data.email;
	}

	save() {
		User.#data.push(this.#temp);
	}

	static deleteById(id) {
		User.#data = User.#data.filter((user) => {
			return user.id != id;
		});
	}
}
// User.deleteById(2);
// console.log(User.find());

module.exports = User;
