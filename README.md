## 🟢 DAY 1 – JavaScript Basics (Deep Explanation)

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

### 🔹 What does this mean?

- Only **one task runs at a time**
- Code executes **line by line**, from top to bottom

---

### 🧪 Example Code

```javascript
console.log("1");
console.log("2");
console.log("3");

## 3️⃣ Ways to Write JavaScript Code

---

### 🔹 Inside the Browser

You can write and test JavaScript directly in the browser using the **Console**.

**Steps:**
- Right click on the web page  
- Select **Inspect**  
- Open the **Console** tab  
- Write JavaScript code and press Enter  

---

### 🔹 Inside an HTML File

JavaScript can be written inside an HTML file using the `<script>` tag.

```html
<script>
  alert("Hello JS");
</script>
 ---

## 4️⃣ Variables (🔥 Very Important)

A variable is a container used to store data.

JavaScript has **three types of variables**:

| Keyword | Scope    | Reassign | Redeclare |
|--------|----------|----------|-----------|
| var    | Function | ✅       | ✅        |
| let    | Block    | ✅       | ❌        |
| const  | Block    | ❌       | ❌        |

---

###🔹 var (Old – Avoid Using)

```javascript
var a = 10;
var a = 20; // allowed

---

---




❌ Problems:

- Scope issues  
- Can cause bugs  

---




