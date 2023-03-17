const uuid = require("uuid").v4;
class Category {
	static #data = [];
	static find() {
		return Category.#data;
	}
	#temp = {
		id: uuid(),
	};
	constructor(data) {
		// if (!data.category) {
		// 	throw new Error("Please provide category name");
		// }
		this.#temp.category = data.category;
	}
	save() {
		Category.#data.push(this.#temp);
	}

	static deleteById(id) {
		Category.#data = Category.#data.filter((cat) => {
			return cat.id != id;
		});
	}
}
// // const cat = new Category("Book2");
// // cat.save();
// Category.deleteById(2);
// console.log(Category.find());
module.exports = Category;
