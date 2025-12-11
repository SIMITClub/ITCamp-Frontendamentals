'use client';

export default function Counter() {
    // Normal variable (React doesn't watch this)
    let count = 0;
  
    const handleAdd = () => {
      count = count + 1;
      console.log("Variable updated to:", count); 
      // ❌ The screen will NOT update!
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1>Count: {count}</h1>
        <button onClick={handleAdd} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add +1
        </button>
      </div>
    );
  }