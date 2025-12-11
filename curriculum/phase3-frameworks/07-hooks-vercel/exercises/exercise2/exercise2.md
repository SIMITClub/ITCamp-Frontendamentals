# 🧪 Exercise 2: The Interactive Counter (State & Events)

## Goal
Build a counter that actually remembers its value.

## Steps

1. Change `count` variable into a state using `useState`.

2. Create a separate `ResetButton` component. Pass a **callback function** down to it so that clicking it resets the parent's count to 0.

3. Use `useEffect` to update the browser's document title whenever the count changes. Import `useEffect` from React and add this effect to your `Counter` component:

   ```jsx
   useEffect(() => {
     document.title = `Count: ${count}`; 
   }, [count]); 
   ```