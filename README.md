# 🟢 DAY 1 – JavaScript Basics (Deep Explanation)

---

## 1️⃣ What is JavaScript? (Concept Clear)

JavaScript is a **programming language** that makes web pages **dynamic and interactive**.

JavaScript helps to:
- Make web pages dynamic
- Work on user actions like click, input, and submit

---

### 🔹 Examples

- Button click → Show a popup  
- Form fill → Validate user data  
- Change data without page reload  

---

### 🔹 Role of HTML, CSS, and JavaScript

- **HTML** → Structure of the webpage  
- **CSS** → Design and styling  
- **JavaScript** → Brain (Logic and functionality)

---

## 2️⃣ How JavaScript Works? (Execution Flow)

JavaScript works in the following way:

- JavaScript is **single-threaded**
- JavaScript is **synchronous by default**

---

### 🔹 What does this mean?

- Only **one task runs at a time**
- Code executes **line by line**, from top to bottom

---

### 🧪 Example Code

```javascript
console.log("1"); 
console.log("2");
console.log("3");
```

---

## 📌 Output:
1
2
3

---

## 3️⃣ JavaScript को लिखने के तरीके (Ways to Write JavaScript)

### 🔹 Browser के अंदर (Inside Browser Console)

You can write JavaScript directly in the browser console:

- Open Developer Tools → `Inspect` → `Console`
- Write and execute JavaScript code directly

---

### 🔹 HTML फ़ाइल के अंदर (Inside HTML File)

You can embed JavaScript directly in your HTML file using `<script>` tags:

```html
<script>
  alert("Hello JS");
</script>
```

---

### 🔹 External JS फ़ाइल (External JS File - BEST PRACTICE)

Create a separate JavaScript file and link it to your HTML:

```html
<script src="script.js"></script>
```

**Benefits of External JS files:**
- Cleaner code structure
- Reusable across multiple HTML files
- Better performance and caching
- Easier to maintain and debug

---

## 4️⃣ Variables (🔥 Very Important)

### 🔹 What is a Variable?

**Variable** = Data को store करने का box

JavaScript में **3 types** के variables होते हैं:

| Keyword | Scope | Reassign | Redeclare |
|---------|-------|----------|-----------|
| var | Function | ✅ | ✅ |
| let | Block | ✅ | ❌ |
| const | Block | ❌ | ❌ |

---

### 🔹 var (OLD – Avoid करो)

```javascript
var a = 10;
var a = 20; // allowed
```

**❌ Problem:** Scope issue, causes bugs

**Best to avoid in modern JavaScript**

---

### 🔹 let (BEST)

```javascript
let age = 25;
age = 26; // allowed
```

**✔ Block scope**  
**✔ Modern JavaScript**  
**✔ No redeclaration allowed**

---

### 🔹 const (FIXED VALUE)

```javascript
const pi = 3.14;
pi = 3.15; // ❌ Error - Cannot reassign
```

**✔ Cannot be reassigned**  
**✔ Block scope**  
**✔ Must be initialized when declared**

---

### 📌 Rule for Choosing:

- **Value change नहीं होगी** → Use `const`
- **Value change होगी** → Use `let`
- **var** → Never use in modern JavaScript

---

## 5️⃣ Data Types (Deep but Easy)

### 🔹 Primitive Data Types (Value copy होती है)

**Number**
```javascript
let x = 10;
let price = 99.99;
```

**String**
```javascript
let name = "Rohit";
let message = 'Hello';
```

**Boolean**
```javascript
let isLogin = true;
let isAdmin = false;
```

**Undefined**
```javascript
let a;
console.log(a); // undefined
```

**Null**
```javascript
let b = null;
```

**BigInt**
```javascript
let big = 1234567890123456789n;
```

**Symbol (Advanced)**
```javascript
let id = Symbol('id');
```

---

### 🔹 Non-Primitive Data Types (Reference type)

**Array**
```javascript
let arr = [10, 20, 30];
let fruits = ["Apple", "Banana", "Mango"];
```

**Object**
```javascript
let user = {
  name: "Rohit",
  age: 23,
  city: "Delhi"
};
```

---

### 📌 Interview Point (Very Important!)

| Type | Behavior |
|------|----------|
| **Primitive** | Value copy होती है |
| **Non-Primitive** | Reference copy होती है |

**Example:**
```javascript
// Primitive (Value Copy)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (a नहीं बदला)

// Non-Primitive (Reference Copy)
let obj1 = { name: "Rohit" };
let obj2 = obj1;
obj2.name = "Sharma";
console.log(obj1.name); // "Sharma" (obj1 भी बदल गया)
```

---

## 6️⃣ typeof Operator (Interview Favourite)

```javascript

typeof 10        // number
typeof "hello"   // string
typeof true      // boolean
typeof undefined // undefined
typeof null      // ❗ object (JS bug)
typeof {}       // object
typeof []       // object
typeof function(){} // function

```

---

### ⚠ Interview Trick:
typeof null === "object" (historic bug)

---

## 7️⃣ Operators (With Logic)
### 🔹 Arithmetic
```javascript
+  -  *  /  %
```

### 🔹 Comparison
```Javascript
==   // value check
===  // value + type check (BEST)
5 == "5"   // true
5 === "5"  // false
```

### 📌 Always use ===

---

### 🔹 Logical
```javascript
&&  ||  !```

## 8️⃣ Input & Output

###🔹 Output
```javascript
console.log("Hello");
alert("Hi");

```

### 🔹 Input
```javascript
let name = prompt("Enter your name");
```

---

## 9️⃣ Mini Logic Examples

```javascript
Even / Odd
let num = 10;
if(num % 2 === 0){
  console.log("Even");
}else{
  console.log("Odd");
}```

---

## 🎯 Interview Questions (DAY 1)

### Q1: JS kya hai? (What is JavaScript?)

JavaScript is a lightweight, interpreted programming language that runs in browsers and makes web pages interactive.

```javascript
// JavaScript allows dynamic interactions
document.getElementById("btn").addEventListener("click", function() {
  alert("Button Clicked!");
});
```

---

### Q2: var, let, const difference

```javascript
// VAR - Function scoped, can be redeclared and updated
var a = 10;
var a = 20; // ✅ Can redeclare
a = 30; // ✅ Can update
console.log(a); // 30

// LET - Block scoped, cannot be redeclared but can be updated
let b = 10;
// let b = 20; // ❌ Cannot redeclare
b = 30; // ✅ Can update
console.log(b); // 30

// CONST - Block scoped, cannot be redeclared or updated
const c = 10;
// const c = 20; // ❌ Cannot redeclare
// c = 30; // ❌ Cannot update
console.log(c); // 10

// Block Scope Example
if (true) {
  var x = 1;
  let y = 2;
  const z = 3;
}
console.log(x); // 1 (accessible outside)
// console.log(y); // ❌ ReferenceError
// console.log(z); // ❌ ReferenceError
```

---

### Q3: == vs ===

```javascript
// == (Loose Equality) - Type Coercion (converts types)
console.log(5 == "5"); // ✅ true (converts string to number)
console.log(0 == false); // ✅ true (converts boolean to number)
console.log(null == undefined); // ✅ true

// === (Strict Equality) - No Type Coercion (checks both value and type)
console.log(5 === "5"); // ❌ false (different types)
console.log(0 === false); // ❌ false (different types)
console.log(null === undefined); // ❌ false (different types)

// Best Practice: Always use ===
if (age === 18) {
  console.log("Adult");
}
```

---

### Q4: Primitive vs Non-Primitive

```javascript
// PRIMITIVE - Immutable, stored by value
let num = 10; // Number
let str = "Hello"; // String
let bool = true; // Boolean
let undef = undefined; // Undefined
let empty = null; // Null
let sym = Symbol("id"); // Symbol
let big = 1000n; // BigInt

// Stored by Value
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 (not affected)

// NON-PRIMITIVE - Mutable, stored by reference
let arr = [1, 2, 3]; // Array
let obj = { name: "John" }; // Object
let func = function() {}; // Function

// Stored by Reference
let x = [1, 2, 3];
let y = x;
y.push(4);
console.log(x); // [1, 2, 3, 4] (affected - same reference)
console.log(x === y); // true (same reference)
```

---

### Q5: typeof null kya hota hai? (What does typeof null return?)

```javascript
// typeof null returns "object" (This is a bug in JavaScript!)
console.log(typeof null); // ❌ "object" (should be "null")
console.log(typeof undefined); // ✅ "undefined"

// To check if something is null:
let value = null;
console.log(value === null); // ✅ true (use strict equality)
console.log(value == null); // ✅ true

// Checking all types
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof BigInt(123)); // "bigint"
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are objects)
console.log(typeof function(){}); // "function"
```

---

# 🟢 DAY 1 (EXTRA but IMPORTANT CONTENT)

### 1️⃣ JavaScript Keywords & Reserved Words

Ye wo words hote hain jo JavaScript me already defined hote hain. Inhe hum variable names ke taur par use nahi kar sakte kyunki ye language ke liye special meanings rakhte hain.

```javascript
// COMMON JAVASCRIPT KEYWORDS
let, const, var        // Variable declaration
if, else, else if      // Conditional statements
for, while, do         // Loops
function, return       // Functions
break, continue        // Loop control
true, false, null      // Literals
undefined              // Undefined value
try, catch, finally    // Error handling
throw                  // Throw errors
class, extends         // OOP
this, new, delete      // Object operations
typeof, instanceof     // Type checking
switch, case           // Switch statements
default                // Default case
import, export         // Modules
async, await           // Async operations
yield                  // Generators
super, static          // Class features
```

---

### ❌ Why We Cannot Use Keywords as Variable Names

```javascript
// WRONG EXAMPLES - These will throw SyntaxError

// let if = 10; // ❌ SyntaxError: Unexpected token 'if'
// let function = 20; // ❌ SyntaxError: Unexpected token 'function'
// let return = 30; // ❌ SyntaxError: Unexpected token 'return'
// let for = 40; // ❌ SyntaxError: Unexpected token 'for'
// let class = 50; // ❌ SyntaxError: Unexpected token 'class'

// CORRECT EXAMPLES - Avoiding reserved words

let ifCondition = 10; // ✅ Good
let myFunction = 20; // ✅ Good
let returnValue = 30; // ✅ Good
let forLoop = 40; // ✅ Good
let myClass = 50; // ✅ Good
```

---

### 📌 Interview Tip: "Why we cannot use keywords as variable names?"

**Answer to give in Interview:**

```javascript

"JavaScript Keywords are reserved by the language itself for specific purposes.
Each keyword has a predefined meaning in the JavaScript engine.

If we could use keywords as variable names, it would create AMBIGUITY and 
CONFLICTS with the language's parser.

For example:
- 'let' tells the engine to declare a variable
- 'if' tells the engine to evaluate a condition
- 'function' tells the engine to declare a function
- 'return' tells the engine to exit a function

If we use 'let if = 10;', the parser gets confused:
  Does it mean: declare a variable named 'if'?
  Or does it mean: start an if condition?

This CONFLICT breaks the syntax and throws a SyntaxError.

Therefore, to maintain clear and unambiguous code structure, JavaScript 
reserves these keywords and doesn't allow them as variable names."

// REAL WORLD ANALOGY
console.log(`
  🏛️ Keywords are like Traffic Rules:
  - You can't use "STOP" as your car's name
  - You can't use "RIGHT TURN" as a person's name
  - Each has a specific meaning everyone understands
  
  Similarly, keywords have specific meanings in programming!
`);

```

---

### 📝 Reserved Words vs Keywords

```javascript
// RESERVED WORDS (Cannot be used as identifiers)
// Strict Mode Reserved Words
let implements, interface, package, private, protected, public;
let static, yield;

// Browser Reserved Words (Future use)
let enum, export, extends;

// BEST PRACTICE: Avoid using words similar to keywords
let myVar = 10; // ✅ Good
let myFn = () => {}; // ✅ Good
let forLoop = 0; // ✅ Good (avoid 'for')
let ifCondition = true; // ✅ Good (avoid 'if')
```

---

### 2️⃣ Statements vs Expressions (🔥 Interview Favourite)

#### 🔹 What is a Statement?
Jo kaam karta hai (Does an action but does NOT return a value).

```javascript
STATEMENTS - Perform actions, no return value

Variable Declaration Statement
let a = 10;
const b = 20;
var c = 30;

// If-Else Statement
if (a > 5) {
  console.log("Greater");
} else {
  console.log("Smaller");
}

// For Loop Statement
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While Loop Statement
while (a > 0) {
  a--;
}

// Function Declaration Statement
function greet() {
  console.log("Hello");
}

// Switch Statement
switch (a) {
  case 10:
    console.log("Ten");
    break;
  default:
    console.log("Other");
}

// Try-Catch Statement
try {
  // some code
} catch (error) {
  console.log(error);
}
```

---

### 🔹 What is an Expression?
Jo value return karta hai (Returns a value that can be used or stored).

## EXPRESSIONS - Return values

###  Arithmetic Expressions
```javascript
10 + 20; // Returns 30
5 * 4; // Returns 20
100 / 2; // Returns 50
7 % 3; // Returns 1
```

### Comparison Expressions
```javascript
let a = 10;
a > 5; // Returns true
a < 5; // Returns false
a === 10; // Returns true
a !== 5; // Returns true
```


### Logical Expressions
```javascript
true && false; // Returns false
true || false; // Returns true
!true; // Returns false
```

### Assignment Expressions (Assignment is an expression in JS!)

```javascript
let x = 5; // Expression that returns 5
let y = (x = 10); // Assignment expression returns 10
console.log(y); // 10
```

### Function Call Expression
```javascript
Math.max(10, 20, 30); // Returns 30
"hello".length; // Returns 5
```

### Ternary Operator Expression
```javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor"; // Expression returns "Adult"
console.log(status);
```

### Increment/Decrement Expressions
```javascript
let count = 5;
count++; // Expression returns 5 then increments
++count; // Expression increments then returns
```

### Template Literal Expression
```javascript
let name = "John";
`Hello ${name}`; // Expression returns "Hello John"
```

### Array Literal Expression
```javascript
[1, 2, 3]; // Expression returns an array
```

### Object Literal Expression
```javascript
[{ name: "John", age: 30 }; // Expression returns an object
```

### Function Expression (different from declaration)
```javascript
const add = function(a, b) {
  return a + b;
}; // Returns the function itself
```

---

#### 📊 Key Differences - Quick Comparison

```javascript
// STATEMENT - No return value (Cannot be used on right side of =)
if (true) {
  console.log("This is a statement");
}

// EXPRESSION - Returns value (Can be stored in variable)
let result = 10 > 5 ? "Yes" : "No"; // Expression returns "Yes"

// ❌ WRONG - Cannot assign statement to variable
// let x = (if (true) { ... }); // SyntaxError!

// ✅ RIGHT - Can assign expression to variable
let y = (10 > 5); // ✅ Works! y = true
```

---

#### 📌 Interview Tip & Answer

**Interview Question:** "What's the difference between statements and expressions?"

**Answer to give:**

```javascript

"Statements and expressions are two fundamental concepts in JavaScript:

🔹 STATEMENTS:
- Perform actions or declare things
- Do NOT return a value
- Examples: let, if, for, while, switch, function declaration
- Cannot  be used on the right side of assignment
- Used to structure program flow

🔹 EXPRESSIONS:
- Calculate and return a value
- The returned value can be stored in variables or used elsewhere
- Examples: 10 + 20, a > 5, function calls, ternary operator
- Can be used on right side of assignment
- Used to produce values

KEY POINT: 
Expression hamesha kuch return karta hai, statement nahi.

REAL WORLD ANALOGY:
- STATEMENT = Recipe instructions ("Mix flour with water")
  - Describes what to do
  - Doesn't produce a direct result you take

- EXPRESSION = Recipe measurement ("2 cups of flour")
  - Produces/returns a value
  - You can use this value directly

PRACTICAL EXAMPLE:
let x = if (true) { 10 }; // ❌ WRONG - if is a statement
let y = true ? 10 : 20;   // ✅ RIGHT - ternary is an expression

```

---

#### 🧪 Interview Practice Examples

```javascript
Identify whether it's Statement or Expression

1. let name = "John";
Answer: Statement (variable declaration)

2. name.length
Answer: Expression (returns 4)

3. for (let i = 0; i < 5; i++) { }
Answer: Statement (loop)

4. Math.sqrt(16)
Answer: Expression (returns 4)

5. function add(a, b) { return a + b; }
Answer: Statement (function declaration)

6. const sum = (a, b) => a + b;
Answer: Expression (arrow function expression)

7. if (x > 10) { console.log("Big"); }
Answer: Statement (conditional)

8. x > 10 ? "Big" : "Small"
Answer: Expression (ternary operator returns a value)

9. while (true) { break; }
Answer: Statement (loop)

10. [1, 2, 3].map(x => x * 2)
Answer: Expression (returns new array [2, 4, 6])
```
 ---


### 3️⃣ JavaScript Case Sensitive Hoti Hai
```javascript
let name = "Rohit";
let Name = "Amit";
```

#### ✔ Dono alag variables hain

#### 📌 Interview trap:

Ques : console.log(Name) vs console.log(name) 
Answer : In JavaScript, console.log(Name) vs. console.log(name) will behave differently because JavaScript is case-sensitive. The key difference here is how JavaScript interprets variable names based on their case.

### console.log(Name):

JavaScript will look for a variable named Name. If Name is declared and assigned a value, it will log that value.

If there is no variable named Name (with that specific capitalization), JavaScript will throw a ReferenceError, indicating that Name is not defined.

###console.log(name):

Similarly, JavaScript will look for a variable named name. If name is declared and assigned a value, it will log that value.

If there is no variable named name, it will throw a ReferenceError.


---
## 4️⃣ Naming Conventions (Industry Rule)
In JavaScript, a naming convention is just a set of rules and habits for naming things like variables, functions, and classes so your code is easy to read and understand.

#### ✔ Valid
let userName;
let totalPrice;

#### ❌ Invalid
let user-name;
let 123abc;

#### 📌 camelCase JS ka standard hai

---

## 5️⃣ Type Conversion & Coercion (🔥 Very Important)

### 🔥 What is a “Type”?

A type is just the kind of value:

number → 10

string → "10"

boolean → true / false


1. Type Conversion (👉 YOU do it)
Type Conversion means you manually change one type into another.

```javascript
let age = "25";     // string
let newAge = Number(age);  // converted to number

console.log(newAge);       // 25
console.log(typeof newAge); // number
```

#### Common Conversions:
```javascript
Number("10")   // 10
String(10)     // "10"
Boolean(1)     // true
Boolean(0)     // false
```
2. Type Coercion (👉 JavaScript does it)
Type Coercion means JavaScript automatically changes the type for you.

Example:
``` javascript
let result = "5" + 2;
console.log(result);   // "52"
```

#### JS says:
- 💭 “Oh, one value is a string… I’ll convert 2 to "2"”

### ⚠️ IMPORTANT: + is special
```javascript
"5" + 2   // "52"  (string)
"5" - 2   // 3     (number)
"5" * 2   // 10
"5" / 2   // 2.5
true + 1   // 2
false + 1  // 1
```

----
## NaN (Not a Number)
NaN stands for Not a Number.
It’s a special value that represents something not a valid number.

```js
Number("abc")  // NaN
Check:
isNaN("abc")  // true
```

#### 📌 Interview:
NaN === NaN → ❌ false

---

## 7️⃣ Undefined vs Null (CONFUSION CLEAR)

| Undefined             | Null                      |
| --------------------- | ------------------------- |
| Value assign nahi hui | Value intentionally empty |
| JS deta hai           | Developer deta hai        |

```js
let a;
let b = null;
```
---

## 8️⃣ Comments in JavaScript
- // single line
- /* multi
- line */
---

## Tricky Output
```js
console.log("5" + 2); // ?
console.log("5" - 2); // ?
console.log(true + true); // ?
console.log(null + 1); // ?
```
#### ✔ Answers:
```js
52
3
2
1
```
---

# 🟡 DAY 2 – Conditionals, Loops & Functions (Deep Dive)

## 1️⃣ Conditional Statements (Decision Making)
### 🔹 if – else
```js
let age = 20;

if (age >= 18) {
  console.log("Eligible for vote");
} else {
  console.log("Not eligible");
}
```
#### 📌 Flow:
Condition true → if block
false → else block
---

### 🔹 else if (Multiple conditions)
```js
let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```

#### 📌 Interview Tip:
JS top-to-bottom check karta hai, pehla true mila to wahi stop.
(JS checks top-to-bottom, stopping at the first true found.)
---

### 🔹 switch case
```js
let day = 2;

switch(day){
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}
```

#### 📌 Interview:
break nahi lagaya → fall-through hota hai **❌**

---

## 2️⃣ Loops (Repetition ka King 👑)
🔹 for loop
for(let i = 1; i <= 5; i++){
  console.log(i);
}


#### 📌 Use when iterations fixed ho

### 🔹 while loop
```js
let i = 1;
while(i <= 5){
  console.log(i);
  i++;
}
```
#### 📌 Condition pe depend karta hai
---

#### 🔹 do-while (At least once)
```js
let i = 1;
do{
  console.log(i);
  i++;
}while(i <= 5);


📌 Interview Favourite:
do-while ek baar zaroor chalega
```
---

### 🔹 break & continue
```js
for(let i = 1; i <= 5; i++){
  if(i === 3) continue;
  if(i === 5) break;
  console.log(i);
}
```

## 3 Funnction

#### Question. What is the Function?
Answer. A reusable block of code that performs a task. (Function = reusable block of code)

#### 🔹 Normal Function
```js
function add(a, b){
  return a + b;
}
console.log(add(10, 20));
```

#### 🔹 Function without return
```js
function greet(){
  console.log("Hello Rohit");
}
greet();
``` 

#### 🔹 Function with default parameter
```js
function greet(name = "User"){
  console.log("Hello " + name);
}
greet();
```

#### 🔹 Function Expression
```js
const multiply = function(a, b){
  return a * b;
};
```

## 📌 Hoisting yahan kaam nahi karta

#### 🔹 Arrow Function (Modern JS)
```js
const square = (n) => n * n;
console.log(square(5));
```

#### 📌 Arrow function me:
this apna nahi hota

#### Short syntax

## 4️⃣ Scope (Intro – Deep later)
```js
let x = 10;

function test(){
  let y = 20;
  console.log(x); // accessible
}
```

#### 📌 Block scope → let, const
#### 📌 Function scope → var
---
