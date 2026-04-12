import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    // localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    toast.success("Logged out successfully 👋");
    navigate("/login");
  };

  return (
    <div className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 
        className="text-xl font-bold text-blue-600 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        MyApp
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-600 hidden sm:block">
          {user?.name}
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}