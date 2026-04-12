import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     const user = JSON.parse(localStorage.getItem("user"));

//     if (user?.email === email && user?.password === password) {
//       toast.success("Login Successful 🚀");
//       navigate("/dashboard");
//     } else {
//       toast.error("Invalid Credentials ❌");
//     }
//   };
const handleLogin = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user?.email === email && user?.password === password) {
    localStorage.setItem("isLoggedIn", "true");
    toast.success("Login Successful 🚀");
    navigate("/dashboard");
  } else {
    toast.error("Invalid Credentials ❌");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input className="input" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />

        <input type="password" className="input" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleLogin} className="btn mt-3">Login</button>
      </div>
    </div>
  );
}