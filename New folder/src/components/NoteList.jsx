import NoteItem from "./NoteItem";

function NoteList({ notes }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} />
      ))}
    </div>
  );
}

export default NoteList;