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

