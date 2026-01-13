# 🧠 05 - Javascript Advanced

<!-- TODO: Update this -->
> TLDR; ES6 makes your JavaScript cleaner, smarter, and more maintainable, helping your code scale and easing the transition to React.js.

## 📚 Table of Contents

<!-- TODO: remember to change this -->
1. [🔍 Topic Overview](#-topic-overview)
2. [📦 Project Setup](#-project-setup)
3. [📄 Code Walkthrough](#-code-walkthrough)
4. [🧪 Exercises](#-exercises)
5. [🛠️ Pushing Your Work](#-pushing-your-work)
6. [📝 Bonus Resources](#-bonus-resources)
7. [🙌 Contributors](#-contributors)

## 🔍 Topic Overview

In this session, we'll cover:
* Brief summary of the workshop topic.
* Why this topic is important
* Real-world examples.

## 📦 Project Setup

Before we begin:

1. **Sync your fork**
    * To make sure your forked repo is up to date with the main repo.
    * **Go to your forked repo on GitHub** and click the **Sync** fork button (top right)

2. **Open your project folder**
    * Navigate to the folder where you cloned your forked repo.

3. **Pull the changes to your local machine**
   <!-- TODO: Change this according to your lesson folder -->
   ```bash
    git checkout main
    git pull origin main
   ```

4. **Navigate to the lesson folder**
    <!-- TODO: Change this according to your lesson folder -->
    ```bash
    cd curriculum/phase2-javascript/05-js-advanced
    ```

4. **Install dependencies (if any)**
   <!-- TODO: Remove this section if no need -->
   ```bash
   npm install
   ```

5. **Start the dev server (if applicable)**
    <!-- TODO: Remove this section if no need -->
   ```bash
   npm run dev
   ```

## 📄 Code Walkthrough

---

### 1. Arrow Functions

Arrow functions give you a shorter, cleaner way to write functions.

```js
// Basic function
test = function(a) { 
    return a; 
}

// Arrow function
test = (a) => a;
```

---

### 2. Default Parameters & Functional Update / Updater Function

Default parameters prevent `undefined` issues.

```js
function greet(name = "Guest") {
  return "Hello " + name;
}

const greet = (name = "Guest") => "Hello " + name;
```

Updater Function

```js
// Update function
const updateCount = (prev) => prev + 1;


// Call it
count = updateCount(count);
console.log(count); // 1
// Again!
count = updateCount(count);
console.log(count); // 2
```

---

### 3. Template Literals

Make string concatenation readable.

Instead of
```js
const name = "Leo";
console.log("Welcome, " + name);
```

Do:
```js
const name = "Leo";
console.log(`Welcome, ${name}!`);
```

---

### 4. Ternary Operator

Choose between two values.

Instead of
```js
const age = 20;
const status;

if (age >= 18) {
  status = "Adult";
} 
else {
  status = "Minor";
}

```

Do:
```js
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
```

---

### 5. Optional Chaining

Safely access nested properties.

```js
console.log(user?.address?.street);
```

Prevents errors like: *Cannot read property 'address' of undefined*.

---

### 6. Objects & Arrays Advanced Techniques

### Spread Operator

Copies values into a new array/object.

```js
const arr = [1,2,3];
const newArr = [...arr, 4];
```

### Rest Operator

The rest operator collects multiple elements into a single array.
It’s used when you don’t know how many arguments or values you’ll receive.

```js
const arr = [10, 20, 30, 40, 50];

const [a, b, ...rest] = arr;

console.log(a);     // 10
console.log(b);     // 20
console.log(rest);  // [30, 40, 50]
```

```js
const user = {
  name: "Sam",
  age: 22,
  country: "SG",
  hobby: "coding"
};

const { name, ...others } = user;

console.log(name);    // Sam
console.log(others);  // { age: 22, country: 'SG', hobby: 'coding' }
```

### Destructuring

Extract values easily.

```js
const user = { name: "Ana", age: 21 };
const { name, age } = user;

const arr2 = [10, 20, 30];
const [a,b,c] = arr2;
```

### array.includes()

```js
[1,2,3].includes(2); // true
```

### array.find()

```js
const nums = [5,12,8];
nums.find(n => n > 10); // 12
```

---

### 7. Loops (Recap)

### Loop Summary

| Loop Type    | Works On       | Returns         | Notes                    |
| ------------ | -------------- | --------------- | ------------------------ |
| `for`        | anything       | undefined       | Most flexible            |
| `for...of`   | iterable       | undefined       | Clean for arrays/strings |
| `for...in`   | objects/arrays | undefined       | Loops keys (not values)  |
| `forEach`    | arrays         | undefined       | Callback only, no break  |
| `map/filter` | arrays         | new array/value | Functional loops         |

#### `for`

**Best for:** Full control (index, condition, step).

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

#### `for...of`

**Best for:** Arrays, strings, anything iterable.

```js
for (const n of [10, 20, 30]) {
  console.log(n);
}
```

#### `for...in`

**Best for:** Looping keys of an object.

```js
const user = { name: "Ava", age: 22 };
for (const key in user) {
  console.log(key, user[key]);
}
```

#### `forEach`

**Best for:** Array looping with callbacks (no break).

```js
[1,2,3].forEach(num => console.log(num));
```

#### `map`

Transforms and returns a **new array**.

```js
const doubled = [1,2,3].map(n => n*2);
```

#### `filter`

Returns a **new array** with items that pass the condition.

```js
const big = [5,12,8].filter(n => n > 10);
```

### Break & Continue

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip
  if (i === 5) break;    // stop
}
```

---

## 8. Script Files (Modules)

ES6 modules let you split code into files.

### export

```js
export const PI = 3.14;
```

### export default

```js
export default function main() {}
```

### import

```js
import main, { PI } from "./math.js";
```

### Aliases

```js
import { calculate as calc } from "./utils.js";
```

---

## 9. Document Object Model Manipulation

The DOM (Document Object Model) is how JavaScript sees and interacts with your webpage.

Every tag (`<h1>`, `<p>`, `<button>`, etc.) becomes an object that JS can find, read, or change.

### Selectors

Selectors are how you grab parts of your webpage to manipulate them.

#### 1. `getElementById()`
Used when an element has a unique ID.
```html
<h1 id="title">Hello World</h1>
```
```js
const title = document.getElementById("title");
console.log(title.textContent);  // "Hello World"

// Change text
title.textContent = "Welcome to JS!";
```
🟢 Explanation:
* `document.getElementById("title")` finds the element with that ID.
* `.textContent` gets or changes its text.

#### 2. `getElementByClassName()`
Selects multiple elements that share the same class name.
```html
<p class="highlight">Paragraph 1</p>
<p class="highlight">Paragraph 2</p>
```
```js
const highlights = document.getElementsByClassName("highlight");
console.log(highlights[0].textContent); // "Paragraph 1"

// Change style of first element
highlights[0].style.color = "red";
```
🟢 Explanation:

* Returns an `HTMLCollection` (like an array).
* You can target items using `[index]`.
* `.style` lets you change CSS properties directly.

#### 3. `document.querySelector()` and `document.querySelectorAll()`
Modern, flexible, and supports CSS-style selectors.
```html
<p class="note">Note 1</p>
<p class="note">Note 2</p>
```
```js
const firstNote = document.querySelector(".note"); // first match
firstNote.style.fontWeight = "bold";

const allNotes = document.querySelectorAll(".note"); // get all elements with class "note"
// Loop through each element one by one
for (let i = 0; i < allNotes.length; i++) {
  allNotes[i].style.backgroundColor = "yellow";
}
```
🟢 Explanation:
* `querySelector()` → returns the first matching element.
* `querySelectorAll()` → returns all matches (a NodeList).
* works with CSS selectors like `.class`, `#id`, or `tag`.

### Events and Listeners

Webpages aren’t just for reading — they react.

Events are how you make your site interactive, responding to clicks, hovers, key presses, etc.

#### Basic Button Click
```html
<button id="myBtn">Click Me</button>
<p id="msg">Hello!</p>
```
```js
const btn = document.getElementById("myBtn");
const msg = document.getElementById("msg");

// Directly change text when button is clicked
btn.addEventListener("click", function() {
    msg.textContent = "You clicked the button!";
});
```
🟢 Explanation:
* `addEventListener("click", function() { ... })` listens for a click.
* When it happens, your function runs.
* It’s like saying, “Hey, when someone touches this, do that.”

#### Event Delegation

```html
<h1>Click me to make me bold!</h1>
<p>Click me too!</p>
```
```js
// Listen for clicks on the whole page
document.body.addEventListener("click", function(e) {
// Toggle bold on the clicked element
    if (e.target.style.fontWeight === "bold") {
        e.target.style.fontWeight = "normal"; // turn off bold
    } 
    else {
        e.target.style.fontWeight = "bold";   // make bold
    }
});
```
🟢 Explanation:
* `document.body` listens to all clicks inside the page.
* `e.target` tells you which element was clicked.
* This technique is called event delegation — useful when you have many clickable elements.

### Summary of DOM Manipulation

| Action                  | Method                               | Returns        | Typical Use                          |
| ----------------------- | ------------------------------------ | -------------- | ------------------------------------ |
| Get element by ID       | `getElementById("id")`               | Single element | When targeting one unique thing      |
| Get elements by class   | `getElementsByClassName("class")`    | HTMLCollection | When multiple elements share a class |
| CSS-style query (first) | `querySelector("selector")`          | Single element | Modern, flexible targeting           |
| CSS-style query (all)   | `querySelectorAll("selector")`       | NodeList       | Loop through all matching elements   |
| React to user actions   | `addEventListener("event", handler)` | —              | Make your page interactive           |

### 🧪 Quick Practice: Change text color when a button is clicked.
#### 1. Move the code from `script.js` to `libraries.js`
#### 2. In `index.html`, attach an ID to heading 1 and the button
```html
<body>
    <h1 id="title">Javascript!</h1>
    <button id="colour-btn">This is a button</button>
    <script src="script.js"></script>
</body>
```
#### 3. In `script.js`, access the elements by their IDs
```js
let title = document.getElementById("title");
let button = document.getElementById("colour-btn");
```
#### 4. Add an event listener to the button below the initialisation
```js
button.addEventListener("click", function() {

});
```
#### 5. Write the code that changes the colour of the title
```js
button.addEventListener("click", function() {
    title.style.color = "red";
});
```
#### 6. Try other colour and confirm that the code works as intended
```js
button.addEventListener("click", function() {
    title.style.color = "green";
});
```
#### 7. Extra: We can apply conditionals to make the button more interactive
```js
button.addEventListener("click", function() {
    if (title.style.color == "green"){
        title.style.color = "red";
    }
    else {
        title.style.color = "green";
    }
});
```
## 🧪 Mini Project B - To-do List
### Here is the starter code:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Lesson 4 ITCamp - Mini Project B</title>
    </head>
    <body>
        <h1 id = "title">To-do List</h1>
        <script src="script.js"></script>
    </body>
</html>
```
### Brainstorming the ideas
#### 1. User types a task in the input box -> need input space
#### 2. Clicking “Add Task” (or pressing Enter) adds it to the list -> need a button to add task, need a list to store the tasks
#### 3. Clicking a task toggles its completion status -> need certain style on the text, and a state called completed

### Start coding
#### 1. Remove the code in `script.js`.
#### 2. Add input space, an add-task button, and a list to store the tasks.
```html
<body>
    <h1 id = "title">To-do List</h1>
    <!-- this is the input space -->
    <input id="taskInput" placeholder="Type a task..." />  
    <!-- this is the button used to add tasks to the list -->
    <button id="addBtn">Add</button>
    <!-- this is the list that displays the tasks -->
    <ul id="taskList"></ul>
    <script src="script.js"></script>
</body>
```
#### 3. Add the state "completed" using CSS.
```html
<head>
    <meta charset="UTF-8">
    <title>Lesson 4 ITCamp - Mini Project B</title>
    <style>
        .completed {
        text-decoration: line-through; /*when completed, the task is crossed*/
        color: gray; /*the colour is then changed to grey*/ 
        }
        body { 
            font-family: sans-serif; 
            padding: 20px; 
        }
        input { 
            margin-right: 8px; 
        }
    </style>
</head>
```
#### 4. In `script.js`, access the elements by their IDs
```js
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');
```
#### 5. Below the initialisations, attach an event listener to the button
```js
addBtn.addEventListener('click', function() {

});
```
#### 6. Add a code to put user's input inside the text variable and handle empty input
```js
addBtn.addEventListener('click', function() {
    const text = input.value.trim();        // remove extra spaces
    if (text === '') return;               // ignore empty input
});
```
#### 7. Add this code to actually create the task in the list
```js
addBtn.addEventListener('click', function() {
    const text = input.value.trim();        // remove extra spaces
    if (text === '') return;               // ignore empty input
    const li = document.createElement('li'); // create a list item
    li.textContent = text;                   // set its text
    list.appendChild(li); // put new task into the list
});
```
#### 8. Clear input for the next task
```js
addBtn.addEventListener('click', function() {
    const text = input.value.trim();        // remove extra spaces
    if (text === '') return;               // ignore empty input
    const li = document.createElement('li'); // create a list item
    li.textContent = text;                   // set its text
    list.appendChild(li); // put new task into the list
    input.value = '';     // clear input for next task
});
```
#### 9. Make clicking a task toggles its completion status
```js
addBtn.addEventListener('click', function() {
    const text = input.value.trim();        // remove extra spaces
    if (text === '') return;               // ignore empty input

    const li = document.createElement('li'); // create a list item
    li.textContent = text;                   // set its text

    // when clicked, toggle completed look
    li.addEventListener('click', function(e) {
    // e.target is the element that was clicked (the <li>)
    e.target.classList.toggle('completed');
    });

    list.appendChild(li); // put new task into the list
    input.value = '';     // clear input for next task
});
```
#### 10. Enable clicking enter to add the task
```js
//Add this below the button event listener
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter'){
        
    };
});
```
#### 11. Copy the function inside button event listener and paste it inside input event listener
```js
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter'){
        const text = input.value.trim();        // remove extra spaces
        if (text === '') return;               // ignore empty input

        const li = document.createElement('li'); // create a list item
        li.textContent = text;                   // set its text

        // when clicked, toggle completed look
        li.addEventListener('click', function(e) {
            // e.target is the element that was clicked (the <li>)
            e.target.classList.toggle('completed');
        });

        list.appendChild(li); // put new task into the list
        input.value = '';     // clear input for next task
    };
});
```
### You might think that this is not the best practice. Let's use function to increase the modularity of the code!
#### 12. Refactor the code by making a function called `addTask()`
```js
function addTask(){
    const text = input.value.trim();        // remove extra spaces
    if (text === '') return;               // ignore empty input

    const li = document.createElement('li'); // create a list item
    li.textContent = text;                   // set its text

    // when clicked, toggle completed look
    li.addEventListener('click', function(e) {
        // e.target is the element that was clicked (the <li>)
        e.target.classList.toggle('completed');
    });

    list.appendChild(li); // put new task into the list
    input.value = '';     // clear input for next task
}
```
#### 13. Edit the event listeners code
```js
addBtn.addEventListener('click', addTask);

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter'){
        addTask();
    };
});
```

### Your code should look approximately like this
#### `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Lesson 4 ITCamp - Mini Project B</title>
        <style>
            .completed {
            text-decoration: line-through; /*when completed, the task is crossed*/
            color: gray; /*the colour is then changed to grey*/ 
            }
            body { 
                font-family: sans-serif; 
                padding: 20px; 
            }
            input { 
                margin-right: 8px; 
            }
        </style>
    </head>
    <body>
        <h1 id = "title">To-do List</h1>
        <input id="taskInput" placeholder="Type a task..." />
        <button id="addBtn">Add</button>
        <ul id="taskList"></ul>
        <script src="script.js"></script>
    </body>
</html>
```
#### `script.js`:
```js
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter'){
        addTask();
    };
});

function addTask(){
    const text = input.value.trim();        // remove extra spaces
    if (text === '') return;               // ignore empty input

    const li = document.createElement('li'); // create a list item
    li.textContent = text;                   // set its text

    // when clicked, toggle completed look
    li.addEventListener('click', function(e) {
        // e.target is the element that was clicked (the <li>)
        e.target.classList.toggle('completed');
    });

    list.appendChild(li); // put new task into the list
    input.value = '';     // clear input for next task
}
```
Can you add delete button to this code? How about dark mode? Could you improve the functionality of this simple application?

--put storage here--


## 🧪 Exercises

<!-- TODO: Depends on you -->
* 🏁 Starter Exercise: ...
* 🔧 Modify This Component: ...
* 🧠 Thought Question: ...

## 🛠️ Pushing Your Work

<!-- TODO: If dont have updates, then remove this section (and the Table of Contents too) -->
Once you're done with the exercises and your changes are complete, make sure to push your updates:
```bash
git add .
git commit -m "Complete workshop exercises"
git push origin main
```


## 📝 Bonus Resources

<!-- TODO: Edit or change this, can add youtube link if applicable -->
* [MDN Docs](https://developer.mozilla.org/)
* [W3Schools - Javascript Tutorial](https://www.w3schools.com/js)

## 🙌 Contributors
<!-- TODO: Update this, add your name, edit the role and github username and links -->
| Name         | Role                | GitHub                                             |
| ------------ | ------------------- | -------------------------------------------------- |
| Reynaldi    | Speaker 1 | [@reynaldi-goh](https://github.com/reynaldi-goh)     |
| Michelle     | Speaker 2 | [@Chelle007](https://github.com/Chelle007)             |
| Winston    | Speaker 3 | [@yourgithub](https://github.com/yourgithub)       |
