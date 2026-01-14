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

--put DOM here--

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
