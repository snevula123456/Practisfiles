import axios from "axios";
// import Department from "./clasess";
import ItDepartment from "./clasess";
import person from "./Interface";
import { withTemplate, Personname } from "./Decoraters";
import { p1 } from "./Test";

import { merge, countAndDescribe, extractAndConvert } from "./generics";

console.log(p1);

// Timeout with Axios
setTimeout(() => {
	axios
		.get("https://jsonplaceholder.typicode.com/posts")

		.then((res): any => {
			console.log(res.data);
		})
		.catch((err): any => {
			console.log(err);
		});
	console.log("working");
	console.log("Settimeout is working");
}, 3000);

axios
	.get("https://jsonplaceholder.typicode.com/posts")

	.then((res): any => {
		console.log(res.data);
	})
	.catch((err): any => {
		console.log(err);
	});
console.log("working");

// const organization = new Department("R&D", 1)

// organization.printDepartDetails()

const It = new ItDepartment("ItDept", 100, 1, "testing", "e2");
It.showDept();
console.log(It.salary);

It.salary = 200;
console.log(It.salary);

const emp = ItDepartment.e1;
console.log(emp);

const rahul = new person("shyam", "developer");
console.log(rahul);

const mergeObj = merge<{ name: string }, { age: number }>(
	{ name: "king" },
	{ age: 30 }
);

console.log(mergeObj.name);
console.log(mergeObj.age);

console.log(countAndDescribe("Hi There!"));

console.log(extractAndConvert({ fungus: "max" }, "fungus"));

// Decoraters

// const p1 = new Person()
// console.log(p1)

const withTemp = new Personname();

const e1 = document.getElementById("__tes");
console.log(e1);
// const p1 = new Personname()
console.log("testing today");
