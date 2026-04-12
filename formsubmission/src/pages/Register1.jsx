import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    address: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(form));

    toast.success("Registered Successfully 🎉");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <input className="input" placeholder="Name"
          onChange={(e) => setForm({...form, name: e.target.value})} />

        <input className="input" placeholder="Email"
          onChange={(e) => setForm({...form, email: e.target.value})} />

        <input type="password" className="input" placeholder="Password"
          onChange={(e) => setForm({...form, password: e.target.value})} />

        <textarea className="input" placeholder="Address"
          onChange={(e) => setForm({...form, address: e.target.value})} />

        <button className="btn mt-3">Register</button>

        <p className="text-sm mt-4 text-center">
          Already have an account? 
          <span onClick={() => navigate("/login")} className="text-blue-500 cursor-pointer"> Login</span>
        </p>
      </form>
    </div>
  );
}