import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaTrash } from "react-icons/fa";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // Load students from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students"));
    setStudents(data);
  }, []);

  // Delete student
  const handleDelete = (indexToDelete) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    const updatedStudents = students.filter(
      (_, index) => index !== indexToDelete
    );

    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

      {/* Navigate to Register */}
      <button
        onClick={() => navigate("/")}
        className="mb-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        Go to Register
      </button>

      {/* Table */}
      <table className="w-full border shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Course</th>
            <th className="border p-2 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {!students || students.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center p-4">
                No students found
              </td>
            </tr>
          ) : (
            students.map((student, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">
                  {student.name || "NA"}
                </td>
                <td className="border p-2">
                  {student.email}
                </td>
                <td className="border p-2">
                  {student.course}
                </td>

                {/* ACTIONS */}
                <td className="border p-2">
                  <div className="flex justify-center gap-3">
                    
                    {/* VIEW */}
                    <button
                      onClick={() => navigate(`/student/${index}`)}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
                    >
                      <FaEye />
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                    >
                      <FaTrash />
                    </button>

                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;