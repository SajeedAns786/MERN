function student() {
  this.name = "Sajeed";
  this.age = 22;
  this.email = "Sajeedans.333";
}
student.prototype = {
  address: "Noida",
  getName: function () {
    return this.email;
  },
};

var stu = new student();
stu.name = "Ansari";
console.log(stu.address);
console.log(stu.getName());
