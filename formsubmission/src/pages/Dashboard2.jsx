import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// 13-04-2026 updated till the time
const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students"));
    setStudents(data);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

      <button
        onClick={() => navigate("/")}
        className="mb-4 bg-green-500 text-white px-4 py-2"
      >
        Go to Register
      </button>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Course</th>
          </tr>
        </thead>
        {/* <tbody>
          {students?.map((student, index) => (
            <tr key={index}>
              <td className="border p-2">{student.namel || "NA"}</td>
              <td className="border p-2">{student.email}</td>
              <td className="border p-2">{student.course}</td>
            </tr>
          ))}
        </tbody> */}
        <tbody>
  {!students || students.length === 0 ? (
    <tr>
      <td colSpan="3" className="text-center p-4">
        No students found
      </td>
    </tr>
  ) : (
    students.map((student, index) => (
      <tr key={index}>
        <td className="border p-2">{student.name || "NA"}</td>
        <td className="border p-2">{student.email}</td>
        <td className="border p-2">{student.course}</td>
      </tr>
    ))
  )}
</tbody>
      </table>
    </div>
  );
};

export default Dashboard;