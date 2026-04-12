import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          NotesApp
        </h1>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/notes"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500"
          >
            Notes
          </Link>

          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Toggle
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;