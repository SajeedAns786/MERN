//ECMAscript or ES6 ;
// abc();

// let a = 30;
// a = 90;
// function abc() {
//   let a = 60;
//   console.log(a);
// }
// console.log(a);

// const info = {
//   name: "Sajeed",
//   age: 21,
// };
// info.email = "Sajeedans.333@gmail.com";
// console.log(info.age);

// var name = "Sajeed";
// var age = 22;
// console.log("Hii %s you are %s years old", name, age);
// console.log("Hii " + name + " you are " + age + " years old");
// console.log(`Hii ${name} you are ${age} years old`);

class Users {
  constructor() {
    this.name = "Sajeed Ansari";
    this.age = 22;
  }
  getName() {
    this.email = "Sajeedansari@gmail.com";
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getEmail() {
    return this.email;
  }
}
var user = new Users();
console.log(user.getName());
console.log(user.getEmail());
