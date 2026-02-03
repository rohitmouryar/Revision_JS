// DAY 1 Mini Project
// ✅ Simple Calculator (Console)

let a = Number(prompt("Enter first number"));
let b1 = Number(prompt("Enter second number"));

console.log("Sum:", a + b1);
console.log("Sub:", a - b1);
console.log("Mul:", a * b1);
console.log("Div:", a / b1);

// 🔥 EXTRA MINI PROJECTS (DAY 1)
// ✅ Mini Project 2: Age Validator
let age = Number(prompt("Enter your age"));

if(age >= 18){
  console.log("You are eligible");
}else{
  console.log("Not eligible");
}


// ✅ Mini Project 3: Simple Login Check
let username = prompt("Enter username");
let password = prompt("Enter password");

if(username === "admin" && password === "1234"){
  console.log("Login Successful");
}else{
  console.log("Invalid Credentials");
}


// 🔥 EXTRA MINI PROJECT (DAY 2 BONUS)
// ✅ Password Strength Checker
let pass = prompt("Enter password");

if(pass.length < 6){
  console.log("Weak Password");
}else{
  console.log("Strong Password");
}