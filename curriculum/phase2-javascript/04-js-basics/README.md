# 🧠 04 - Javascript Basics

<!-- TODO: Update this -->
> TLDR; Learn JavaScript — the part that actually makes your website do stuff instead of just posing like a static brochure.

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

### 🧠 What This Workshop Is About

This workshop is a hands-on crash course in JavaScript, designed to take you from zero to building real, interactive web applications — all within a single structured file.

Following the step-by-step guide, you’ll learn by doing: 
1. setting up your first HTML and JavaScript files
2. experimenting with the console
3. writing conditional and loop logic
4. working with arrays and objects

Every section of this README builds on the last — from printing your first message to developing small but complete projects. You won’t just read about JavaScript concepts — you’ll use them in meaningful exercises.

### 💡 Why This Topic Matters

JavaScript is the engine behind modern web interactivity. While HTML provides structure and CSS adds style, it’s JavaScript that makes a website alive.

Understanding JavaScript gives you the ability to:

1. Create interactive interfaces, like clickable buttons and dynamic content.
2. Build modular logic, using functions, loops, and conditionals for reusability and clarity.
3. Connect data and design, bridging what users see with what happens behind the scenes.
4. Lay the foundation for frameworks like React, Vue, or Node.js — tools used in professional development environments.

This workshop focuses not only on syntax, but also on thinking like a developer — how to structure code, reuse logic, and debug effectively.

### 🌍 Real-World Examples

Each part of the README connects JavaScript fundamentals to real-world applications:

| Concept                    | Practical Use in the Workshop                         | Real-World Connection                                 |
| -------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| **Variables & Data Types** | Store and organize user or system data                | Keeping track of usernames, scores, or product info   |
| **Conditionals & Loops**   | Automate repetitive tasks and make decisions          | Filtering data, validating forms, game logic          |
| **Arrays & Objects**       | Group and structure information                       | Managing lists, profiles, inventories                 |
| **Functions**              | Reuse logic efficiently                               | Modular coding in apps, APIs, and backend logic       |
| **Events**                 | Respond to user actions                               | Clicks, key presses, and other interactivity triggers |
| **Mini Library Project**   | Model a real-world system using nested arrays/objects | Data management in apps like catalogs or databases    |
| **To-do List App**         | Combine DOM manipulation and event handling           | Task management tools like Notion or Todoist          |


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
    cd curriculum/phase2-javascript/04-js-basics
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

## 📄 Code Walkthrough and 🔍 Explanation

### A. Printing

* Every program needs a way to talk back to you. 

* In JavaScript, that’s done with console.log(). 

* It displays information in the browser console. 

* You can right click on your mouse and search for developer mode or inspect to view the console. 

* Developers use it constantly to test ideas, debug code, or simply check if something’s working. 

* Think of it as your private notebook where JavaScript whispers what it’s doing behind the scenes.

```js
console.log("This text is in the console!");
```
### B. Including Javascript in HTML
#### Inline
* Inline JavaScript is placed directly inside an HTML element using an attribute like onclick.

* It’s fast and simple for demos, but not ideal for bigger projects since your logic is scattered through your HTML.
```html
<body>
    <h1>Javascript!</h1>
    <button onclick="console.log('Inline JS!')">This is a button</button>
</body>
```
#### Internal

* Internal JavaScript sits inside `<script>` tags.

* It’s a good middle ground — easy to write, still part of your HTML, and perfect for small exercises or prototypes.

* However, as your project grows, it’s better to separate logic from structure.
```html
<body>
    <h1>Javascript!</h1>
    <button>This is a button</button>
    <script>
        console.log("Internal script here!");
    </script>
</body>
```
#### External (best practice)
* This is the professional way. 

* Your JavaScript lives in its own file, keeping HTML neat and making it easier to debug, reuse, or share.

* Websites with complex behavior — think games, forms, or animations — always use external scripts.
```html
<body>
    <h1>Javascript!</h1>
    <button>This is a button</button>
    <script src="script.js"></script>
</body>
```
```js
console.log("External script here!");
```
### C. Variables

* Variables are containers that hold data for later use.

* They let you store information, give it a name, and use it anywhere in your program.
```js
let favouriteAnimal = "Cat";  //use let when the variable might change
const pi = 3.14;  //use const when the variable must not change
// var is outdated, don’t use it unless you time-travel to 2009
```
* Use `let` when you might need to update a value (like a score or a counter). 

* Use `const` when the value should never change (like mathematical constants or settings).

| Keyword | Can Be Changed? | Scope      | Notes                                  |
| ------- | --------------- | ---------- | -------------------------------------- |
| `let`   | ✅ Yes           | Block `{}` | Most commonly used                     |
| `const` | ❌ No            | Block `{}` | Used for values that never change      |
| `var`   | ✅ Yes           | Function   | Outdated and confusing — **avoid it!** |


🛑 Emphasis: No one in modern JavaScript uses var anymore. It behaves weirdly with something called hoisting, and let/const are much safer and clearer.

### D. Data Types
JavaScript handles many kinds of data, each suited for different purposes.
```js
let statement = "hello";  //this is a string
let age = 42;  //this is an integer
let isCool = true;  //this is a boolean
let numbers = [1, 2, 3, 8];  //this is an array
let person = { name: "Bob🥀", age: 25 };  //this is an object

console.log(typeof(statement), typeof(age), typeof(isCool));
console.log(typeof(numbers), typeof(person));
```
| Type    | Example                     | Description                                   |
| ------- | --------------------------- | --------------------------------------------- |
| String  | `"Hello"`                   | Text data enclosed in quotes                  |
| Number  | `42`, `3.14`                | Numeric values (no separate “int” or “float”) |
| Boolean | `true`, `false`             | Logical values used in decisions              |
| Array   | `[1, 2, 3]`                 | Ordered list of items                         |
| Object  | `{ name: "Asha", age: 20 }` | Structured collection of data                 |


You can use `typeof` to check what kind of data something is.
### E. Conditionals

* Conditionals let your code make decisions.

* They ask questions like “Is this true?” or “Does this number pass the test?” and act accordingly.

#### Syntax:
```js
if (condition) {
  // code runs if condition is true
} else if (anotherCondition) {
  // runs if the first was false, but this one is true
} else {
  // runs if all above are false
}

```
Example: You got 90 on your exam. The school system wants to identify whether you pass or not. The passing mark is 75. 

The code is as follow:
```js
let examScore = 90;
if (examScore > 75){
    console.log("You pass!");
} 
else {
    console.log("See you next year lol 💀");
}
```

#### Comparison Operators

Comparison operators compare two values and return a boolean (`true` or `false`).

| Operator | Meaning                                | Example     | Result |
| -------- | -------------------------------------- | ----------- | ------ |
| `==`     | Equal to (checks value only)           | `5 == "5"`  | true   |
| `===`    | *Strictly* equal (checks value + type) | `5 === "5"` | false  |
| `!=`     | Not equal (value only)                 | `5 != "5"`  | false  |
| `!==`    | Strictly not equal (value + type)      | `5 !== "5"` | true   |
| `>`      | Greater than                           | `7 > 3`     | true   |
| `<`      | Less than                              | `7 < 3`     | false  |
| `>=`     | Greater than or equal                  | `5 >= 5`    | true   |
| `<=`     | Less than or equal                     | `4 <= 2`    | false  |

For example:
```js
isCool = true;
if (isCool == true){
    console.log("COOOOLLLL");
}
else {
    console.log("not cool :(");
}
```

#### Logical Operators

Logical operators combine or modify multiple conditions.

| Operator | Meaning                 | Example               | Result                     |
|-----------|-------------------------|-----------------------|-----------------------------|
| `&&`      | AND — both must be true | `(age > 18 && hasID)` | true only if both true      |
| `\|\|`    | OR — either must be true| `(vanilla \|\| choco)`| true if at least one true   |
| `!`       | NOT — reverses truth    | `!isSunny`            | true if `isSunny` is false  |    



```js
let isSunny = true;
let isWeekend = false;

if (isSunny && !isWeekend) {
  console.log("Work with sunlight!");
}

if (isSunny || isWeekend) {
  console.log("Either sunny or weekend, good enough!");
}

```
### F. Arrays 

* An array stores multiple related values in a single variable. 

* Think of it like a numbered shelf — each slot holds one item, and you can access them by position.
#### Declaring an array
```js
let fruits = ["apple", "banana", "cherry"];
```
Each item has an index starting from 0.

#### Accessing element(s)
```js
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "cherry"
```

#### Useful methods
| Method        | Description          | Example                | Result                                |
| ------------- | -------------------- | ---------------------- | ------------------------------------- |
| `.push(item)` | Adds item to the end | `fruits.push("mango")` | `["apple","banana","cherry","mango"]` |
| `.pop()`      | Removes last item    | `fruits.pop()`         | `["apple","banana","cherry"]`         |
| `.length`     | Returns total items  | `fruits.length`        | `3`                                   |

#### Nested arrays (array inside array)
```js
let grid = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log(grid[1][2]); // 6
```

### G. Objects

Objects store data as key–value pairs — a way to represent real-world things with properties.

#### 🧾 Declaring and Accessing
```js
let student = {
  name: "Asha",
  age: 19,
  major: "Computer Science"
};
```
#### 🛠️ Modifying Properties
```js
// Access and modify
console.log(student.name); // "Asha"
student.age = 20;          // change
student.city = "Singapore"; // add new
delete student.major;      // delete a property
console.log(student);
```
#### 🧰 Object Methods

| Method                | Description             | Example                   | Result                                              |
| --------------------- | ----------------------- | ------------------------- | --------------------------------------------------- |
| `Object.keys(obj)`    | Returns property names  | `Object.keys(student)`    | `["name","age","city"]`                             |
| `Object.values(obj)`  | Returns property values | `Object.values(student)`  | `["Asha",20,"Singapore"]`                           |
| `Object.entries(obj)` | Returns key–value pairs | `Object.entries(student)` | `[["name","Asha"],["age",20],["city","Singapore"]]` |

```js
let car = { brand: "Toyota", model: "Yaris", year: 2020 };

console.log(Object.keys(car));   // ["brand", "model", "year"]
console.log(Object.values(car)); // ["Toyota", "Yaris", 2020]
console.log(Object.entries(car)); // [["brand","Toyota"],["model","Yaris"],["year",2020]]
```

#### 🧩 Nested Object (object inside object)

```js
let person = {
  name: "Liam",
  contact: {
    email: "liam@email.com",
    phone: "123-456"
  }
};
console.log(person.contact.email);
```

Note: Objects can hold arrays, other objects, or any type of value.

### H. Loops

Loops repeat code automatically — so you don’t write the same line over and over.

If you want to write "Hello 1", "Hello 2", up until "Hello 4", you would normally write like this:
```js
console.log("Hello 1");
console.log("Hello 2");
console.log("Hello 3");
console.log("Hello 4");
```
What if you want to until "Hello 1000"? Would you write 1000 lines of code for that?

This is where loops come in handy and save the day.

It makes those long lines of code far shorter and more readable.

There are two types of loops (for now), which are for and while loop.

Here are the examples for each type:

#### For Loop
```js
//syntax
//for (initialisation; condition; counter variable) {
    //code
//}
```
```js
//example
for (let i = 1; i <= 4; i++) {
  console.log("Hello " + i);
}
```
#### While Loop
```js
//syntax
// initialisation
// while (condition){
//     //code
//     counter variable
// }
```
```js
//example
let i = 1;
while (i <= 4){
    console.log("Hello " + i);
    i++;
}
```
#### Looping Through Array
```js
let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);  //printing every colour inside the colors array
}
```
#### Nested Loop (loop inside loop)
You use it when you need to go through multi-layered data, like grids, tables, or lists of lists.
```js
let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < grid.length; i++) {        // outer loop → rows
  for (let j = 0; j < grid[i].length; j++) {   // inner loop → columns
    console.log("Row:", i, "Col:", j, "Value:", grid[i][j]);
  }
}
```
What happens here:

* The outer for runs 3 times (once per row).

* Each time it runs, the inner for goes through every number in that row.

* Total prints: 9 values (3 rows × 3 columns).

### I. Functions

Function is reusable blocks of code designed to perform specific tasks.

`console.log()` is one example of a function. It is a built-in function.
```js
console.log("This is a built-in function!");
```
A built-in function is one that JavaScript already provides — like `console.log()`, `Math.random()`, or `alert()`.

What if we want to perform a specific task?

We CAN actually make our own custom function!

#### Creating and Calling a Custom Function
```js
//syntax
function functionName() {
  //what the function should do
}
functionName(); // call the function
```
```js
//example
function greet() {
  console.log("Hello, World!");
}
greet(); // call the function
```
You define it with function, give it a name, and call it by writing its name followed by parentheses.

#### Function with Parameters
```js
function greetPerson(name) {
  console.log("Hello, " + name + "!");
}

greetPerson("Asha");   // "Asha" is the argument
greetPerson("Liam");
```
`name` is a parameter (placeholder variable).

`"Asha"` is an argument (actual value you pass in).

#### Significance of Function

Here’s how pre-function caveman probably code:
```js
// Suppose we have three numbers
let a = 10;
let b = 20;
let c = 30;

// Calculate the total
let total = a + b + c;

// Divide by how many numbers there are
let avg = total / 3;

console.log("Average is:", avg); // 20
```
```js
let numbers = [10, 20, 30, 40, 50];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

let avg = total / numbers.length;
console.log("Average is:", avg); // 30
```
It works, sure. But it’s repetitive, brittle, and screams “please replace me”.

If you need to add one more student, you’re rewriting half your code.

There is actually a pattern in this code:

Each block:
* Adds numbers in an array
* Divides by how many numbers there are
* Prints the result

Same logic, different data.

That’s a pattern — and patterns belong in functions.

```js
function average(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total / numbers.length;
}

console.log(average([10, 20, 30]));          // 20
console.log(average([5, 15, 25, 35, 45]));   // 25
console.log(average([100, 200, 300]));       // 200
```

Now it’s reusable, and you can call it anytime you need it — like your personal calculator bot.

### 🧪 Quick Practice: Write a function that checks every number in the array whether it is even or odd. Then, check the data type.
#### 1. In `script.js`, initialise array `numbers`
```js
let numbers = [1, 4, 7, 10, 23, 88, 1001];
```
#### 2. Utilise for loop to access every element of the array.
```js
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);  //make sure that every element is printed to the console
}
``` 
#### 3. Utilise conditional statements to filter the number based on its divisibility by 2 to determine if the number is odd or even. 
```js
for (let i = 0; i < numbers.length; i++){
    if (numbers[i]%2 == 0){
        console.log(numbers[i] + "is even");
    }
    else {
        console.log(numbers[i] + "is odd");
    }
}
```
#### 4. Check the data type of each element
```js
for (let i = 0; i < numbers.length; i++){
    console.log(typeof(numbers[i]));
}
```

## 🧪 Mini Project A - Mini Library

Before starting, remove the code in `script.js`.
### Let's try to craft the product first!

#### 1. Brainstorm the book object
```js
let book = {
    title: "Title 1 - 2",  //the book is located in first row second column
    row: "1",
    column: "2"
};
```
#### 2. Insert the book to the library
```js
let library = [];
for (let i = 0; i < 9; i++) {
    let currentRow = []; // make a new shelf
    for (let j = 0; j < 26; j++) {
        // for each row, we put 26 books
        let book = {
            title: "Title " + (i + 1) + "-" + (j + 1),
            row: i + 1,
            column: j + 1
        };
        currentRow.push(book);
    }
    library[i] = currentRow; // put the shelf into the library
}
```
#### 3. Display the library structure using `console.log`
```js
console.log(library);
```
#### 4. Search the title of a specific book based on its location
```js
// We may use this format: library[row][column]
// For example, when we want to know the title of the book in fourth row and third column, we write:
let wantedBook = library[4 - 1][3 - 1];  // as the index starts from 0, we subtract 1 from the actual numbers
console.log(wantedBook.title);  // printing the title of the book to the console
```
### Practice modular coding by refactoring the code 
#### 5. Start by writing a function to search the book
```js
function searchBook(row, column){
    let wantedBook;
    wantedBook = library[row - 1][column - 1];
    return wantedBook.title;
}
```
#### 6. Check that the result returned is the same
```js
// To know the title of the book in fourth row and third column,
// put 4 as the argument for row and 3 as the argument for column
console.log(searchBook(4, 3));
```
#### 7. Create a function to generate a book
```js
function createBook(row, column){
    let book = {
        title: "Title " + row + "-" + column,
        row: row,
        column: column
    };
    return book
}
```
#### 8. Verify that `createBook()` works
```js
console.log(createBook(3, 2));
```
#### 9. Update the main code
```js
let library = [];
for (let i = 0; i < 9; i++) {
    let currentRow = []; // make a new shelf
    for (let j = 0; j < 26; j++) {
        // for each row, we put 26 books
        let book = createBook(i + 1, j + 1);
        currentRow.push(book);
    }
    library[i] = currentRow; // put the shelf into the library
}
```
### At this stage, your code should look approximately like this:
```js
let library = [];
for (let i = 0; i < 9; i++) {
    let currentRow = []; // make a new shelf
    for (let j = 0; j < 26; j++) {
        // for each row, we put 26 books
        let book = createBook(i + 1, j + 1);
        currentRow.push(book);
    }
    library[i] = currentRow; // put the shelf into the library
}
console.log(library);

function createBook(row, column){
    let book = {
        title: "Title " + (row) + "-" + (column),
        row: row,
        column: column
    };
    return book;
}
console.log(createBook(3, 2));

function searchBook(row, column){
    let wantedBook;
    wantedBook = library[row - 1][column - 1];
    return wantedBook.title;
}

console.log(searchBook(4, 3));
```
Could you enhance this code modularity? Or perhaps its library capabilities, like storing the age of the book, or its author? 

## Summary
 
In this lesson, we explored the fundamentals of JavaScript and how it brings interactivity to the web. You learned how to use `console.log()` for debugging, link scripts to HTML in different ways, and store data using `let` and `const`. We covered data types, conditionals, loops, and functions — the essential tools for writing logic and automating repetitive tasks. Arrays and objects were introduced as powerful ways to organize and model data, setting the stage for real-world applications.

Through two mini projects, you saw how these concepts connect in practice. The mini library project demonstrated how arrays and objects work together to simulate a real-world system, while the to-do list project showed how to manipulate the Document Object Model (DOM) — selecting elements, handling user events, and dynamically updating content. By the end, you learned not just how to make things work, but how to make code modular, readable, and extendable. You now have a foundation strong enough to keep exploring web development — or at least break fewer things when you experiment.

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
| Reynaldi     | Speaker   | [@reynaldi-goh](https://github.com/reynaldi-goh)       |
