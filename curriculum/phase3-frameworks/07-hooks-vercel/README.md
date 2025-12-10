# 🧠 07 - React Hooks & Deployment

> TLDR; A hands-on workshop mastering React fundamentals: Components, Props, Hooks (useState + useEffect), and Deployment with Vercel.

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
* **CSR vs. SSR:** Understanding when to use `"use client"` in Next.js.
* **Components & Props:** The DRY principle (Don't Repeat Yourself) and passing data top-down.
* **State Management:** Using `useState` to make apps interactive ("Memory").
* **Side Effects:** Using `useEffect` for data persistence and browser interactions ("Senses").
* **Deployment:** Taking your app live to the world using Vercel. 🌍

## 📦 Project Setup

Before we begin:

1. **Sync your fork**
    * To make sure your forked repo is up to date with the main repo.
    * **Go to your forked repo on GitHub** and click the **Sync** fork button (top right)

2. **Open your project folder**
    * Navigate to the folder where you cloned your forked repo.

3. **Pull the changes to your local machine**
   ```bash
    git checkout main
    git pull origin main
   ```

4. **Navigate to the lesson folder**
    ```bash
    cd curriculum/phase3-frameworks/07-hooks-vercel
    ```

5. **Install dependencies (if any)**
   ```bash
   npm install
   ```

6. **Start the dev server**
   ```bash
   npm run dev
   ```

## 📄 Code Walkthrough

We will refer to these patterns throughout the workshop.

### 1. Components & Props
Instead of hardcoding HTML, we pass data into flexible components.
```jsx
// ❌ Bad (Hardcoded)
<div className="card">Desmond - Teacher</div>

// ✅ Good (Reusable)
function UserCard({ name, role }) {
  return <div className="card">{name} - {role}</div>;
}
// Usage: <UserCard name="Desmond" role="Teacher" />
```

### 2. useState
Variables reset on refresh. State remembers data between renders.
```jsx
const [count, setCount] = useState(0);

// ❌ Wrong: count = 5;
// ✅ Correct: setCount(5);
```

### 3. Callback Function
Data flows down. Functions flow down so children can change parent state.
```jsx
// Parent passes the "Key" (handleDelete) to the Child
<DeleteButton onDelete={handleDelete} />
```

### 4. useEffect
Run code after the screen updates (e.g., saving data, console log).
```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]); // Run whenever 'count' changes
```

## 🧪 Exercises

> For more details please check `exercises` folder.

### 🏁 Exercise 1: Dynamic User Cards
* **Goal:** Stop copy-pasting code! Refactor the hardcoded `UserCard` component to be reusable.
* **Task:**
    1.  Modify `UserCard` to accept `name` and `role` as props.
    2.  In `App.js`, render **3 distinct users** (e.g., Teacher, Student, Developer) reusing that single component.

### 🔧 Exercise 2: The Interactive Counter (State & Events)
* **Goal:** Build a counter that actually remembers its value.
* **Task:**
    1.  Create a `count` state using `useState`.
    2.  Add a `+1` button that updates the state.
    3.  **Challenge:** Create a separate `ResetButton` component. Pass a **callback function** down to it so that clicking it resets the parent's count to 0.

### 🚀 Exercise 3: The Notes App (Final Build)
* **Step 1 (State):** Create two pieces of state:
    * `notes`: An array to store the list of notes (Start with `[]`).
    * `input`: A string to store what the user is currently typing.
* **Step 2 (Render):** Use `.map()` to display the `notes` array as a list of UI elements.
* **Step 3 (Persistence):** Use `useEffect` to save the notes to `localStorage` whenever the `notes` array changes.
    * *Hint:* Use `JSON.stringify()` when saving and `JSON.parse()` when loading.

### 🌍 Exercise 4: Deployment
* **Goal:** Publish your app to the live web.
* **Steps:**
  1.  Commit and Push your latest code to GitHub 🐙.
  2.  Go to **Vercel** → **Add New Project**.
  3.  Import your specific repository.
  4.  Click **Deploy** and wait for the magic ✨.
  5.  Paste your live link in the chat!
  
## 🛠️ Pushing Your Work

Once you're done with the exercises and your changes are complete, make sure to push your updates:
```bash
git add .
git commit -m "Complete workshop exercises"
git push origin main
```

## 📝 Bonus Resources

* [React Developer Tools (Chrome Extension)](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - Allows you to inspect components and see State/Props changing in real-time.
* [Lucide React Icons](https://lucide.dev/icons/) - The standard icon library for Next.js (perfect for your Delete/Edit buttons).
* [React Cheatsheet](https://devhints.io/react) - Quick syntax reference for Hooks, Props, and Lifecycle.

## 🙌 Contributors
| Name         | Role                | GitHub                                             |
| ------------ | ------------------- | -------------------------------------------------- |
| Desmond    | Speaker & Activity Creator 1 | [@desraymondz](https://github.com/desraymondz)       |
| Michelle Chan    | Speaker & Activity Creator 2 | [@Chelle007](https://github.com/Chelle007)       |
| Yan Mei | Reviewer         | [@yxnmei](https://github.com/yxnmei)       |
