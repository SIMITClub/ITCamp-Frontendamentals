export default function ResetButton() {
    return (
      // ❌ CRASH!
      // Error: 'setCount' is not defined.
      // The Child says: "I don't know what 'setCount' is! It's not in my house."
      <button onClick={() => setCount(0)} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
        Reset
      </button>
    );
  }