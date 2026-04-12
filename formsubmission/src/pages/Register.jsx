import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("students")) || [];

    const updated = [...existing, formData];

    localStorage.setItem("students", JSON.stringify(updated));

    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-xl font-bold mb-4">Register Student</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full mb-3 p-2 border"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-3 p-2 border"
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Course"
          onChange={handleChange}
          className="w-full mb-3 p-2 border"
          required
        />

        <button className="bg-blue-500 text-white w-full p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;