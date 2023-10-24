// Async menthod
// const fs = require("fs");
// fs.readFile(__dirname + "/hello.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// console.log("Hello"); //This will print first because we have use async function it does not wait for the server response code will continue..

//SYnc method
const fs = require("fs");

try {
  const data = fs.readFileSync(__dirname + "/hello.txt", "utf-8");
  console.log(data);
} catch (error) {
  console.log(error);
}
console.log("Method 2 sync");
