
import { useState } from "react";

function NoteInput({ addNote }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!input) return;
    addNote(input);
    setInput("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 mb-6"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a note..."
        className="flex-1 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
  );
}

export default NoteInput;