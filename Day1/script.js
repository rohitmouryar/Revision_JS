console.log("1");
console.log("2");
console.log("3");


// 4️⃣ Variables (🔥 Very Important)

// var (OLD – avoid karo)
var a = 10;
var a = 20; // allowed

// 🔹 let (BEST)
let age = 25;
age = 26; // allowed

// 🔹 const (FIXED VALUE)
const pi = 3.14;
pi = 3.15; // ❌ error


// 5️⃣ Data Types (Deep but Easy)

// 🔹 Primitive Data Types (Value copy hoti hai)

// Number
let x = 10;

// String
let name = "Rohit";

// Boolean
let isLogin = true;

// Undefined
let a;

// Null
let b = null;

// BigInt
let big = 1234567890123456789n;

// Symbol (Advanced)


// 🔹 Non-Primitive (Reference type)

// Array
let arr = [10, 20, 30];

// Object
let user = {
  name: "Rohit",
  age: 23
};


// 6️⃣ typeof Operator (Interview Favourite)
typeof 10        // number
typeof "hello"   // string
typeof true      // boolean
typeof undefined // undefined
typeof null      // ❗ object (JS bug)

// 7️⃣ Operators (With Logic)

5 == "5"   // true
5 === "5"  // false
5 != "5"  ; // false
5 !== "5";  // true
// 📌 Always use ===

// Logical Operators
true && false  // false
true || false  // true
!true          // false

// 9️⃣ Mini Logic Examples
// Even / Odd

let num = prompt("Enter a number:");
if(num % 2 === 0){
  console.log("Even");
}else{
  console.log("Odd");
}

// 🟢 DAY 1 (EXTRA but IMPORTANT CONTENT)
// 1️⃣ JavaScript Keywords & Reserved Words

// let, const, var        // Variable declaration
// if, else, else if      // Conditional statements
// for, while, do         // Loops
// function, return       // Functions
// break, continue        // Loop control
// true, false, null      // Literals
// undefined              // Undefined value
// try, catch, finally    // Error handling
// throw                  // Throw errors
// class, extends         // OOP
// this, new, delete      // Object operations
// typeof, instanceof     // Type checking
// switch, case           // Switch statements
// default                // Default case
// import, export         // Modules
// async, await           // Async operations
// yield                  // Generators
// super, static          // Class features


// Tricky Output
console.log("5" + 2); // ?
console.log("5" - 2); // ?
console.log(true + true); // ?
console.log(null + 1); // ?

// ✔ Answers:
52
3
2
1
// 2️⃣ JavaScript Comments