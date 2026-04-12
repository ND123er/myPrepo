import { useState } from "react";
import NoteInput from "../components/NoteInput";
import NoteList from "../components/NoteList";

function Notes() {
  const [notes, setNotes] = useState([]);

  function addNote(text) {
    setNotes([...notes, text]);
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        My Notes
      </h2>

      <NoteInput addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default Notes;