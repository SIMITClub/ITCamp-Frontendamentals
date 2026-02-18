# 🧪 Exercise 3: The Notes App (Final Build)

## Goal
Build a fully functional application that allows users to **Add**, **Edit**, and **Delete** notes.

## Steps

### 0. Setup
Open your `app/page.jsx` file. Since we are using Hooks, the very first line **MUST** be:

```jsx
"use client";
import { useState, useEffect } from "react";
```

### 1. Create the State (The Memory) 🧠
We need two pieces of memory:
1.  **`input`**: To remember what the user is typing *right now*.
2.  **`notes`**: An array (list) to store *all* the saved notes.

```jsx
export default function NotesApp() {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);

  // ... rest of code
```

### 2. Handle Inputs & Adding Notes ➕
Let's create the function to add a note.
* **Logic:** We take the current `notes` array, add the new `input` to the end, and then clear the input box.

```jsx
  const addNote = () => {    
    // Spread operator (...) keeps old notes and adds new one
    setNotes([...notes, input]);
    setInput(""); // Clear the box
  };
```

Now, connect this to your **JSX (Your UI)**:

```jsx
  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📝 My Notes App</h1>
      
      <div className="flex gap-2 mb-4">
        <input 
          type="text"
          value={input} // Controlled Input
          onChange={(e) => setInput(e.target.value)} // Update state on type
          className="border p-2 w-full rounded"
          placeholder="Type a note..."
        />
        <button 
          onClick={addNote}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      
      {/* List will go here later */}
    </div>
  );
}
```

### 3. Display the Notes (Rendering) 🎨
Use the `.map()` function to loop through the `notes` array and turn raw data into UI elements.

Add this inside your `return`, below the input section:

```jsx
    <ul className="space-y-2">
    {notes.map((note, index) => (
        <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
        <span>{note}</span>
        {/* Buttons will go here */}
        </li>
    ))}
    </ul>
```

### 4. Delete & Edit Functionality 🗑️ ✏️
Let's add the logic to remove or modify items.
* **Delete:** Keep everything *except* the one we clicked.
* **Edit:** A simple trick! Remove the note from the list and put the text *back* into the input box so you can fix it.

```jsx
  const deleteNote = (indexToDelete) => {
    // Fill in yourself
  };

  const editNote = (indexToEdit) => {
    // Fill in yourself
  };
```

Update your list (`<li>`) to include these buttons:

```jsx
    <div className="flex gap-2">
        <button onClick={() => editNote(index)} className="text-yellow-600">
        Edit
        </button>
        <button onClick={() => deleteNote(index)} className="text-red-600">
        Delete
        </button>
    </div>
```
