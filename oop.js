const fetch = require("node-fetch");

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

const person1 = new Person("Sanjay PJ", 12);

//fetch api

// fetch('https://randomuser.me/api/').then(res => {
// 	return res.json()
// }).then(data => {
// 	console.log(data.results[0]);
// }).catch(err => {
// 	console.log(err);
// });


var promise1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve('foo');
	}, 300);
});

promise1.then(function (value) {
	console.log(value);
	// expected output: "foo"
});

console.log(promise1);