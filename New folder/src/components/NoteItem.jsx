function NoteItem({ note }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
      <p className="text-gray-700 dark:text-gray-200">{note}</p>
    </div>
  );
}

export default NoteItem;