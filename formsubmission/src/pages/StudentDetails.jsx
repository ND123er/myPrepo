import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { id } = useParams();
  const students = JSON.parse(localStorage.getItem("students"));

  const student = students?.[id];

  if (!student) {
    return <h2 className="p-6">Student not found</h2>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Details</h1>

      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Course:</strong> {student.course}</p>
    </div>
  );
};

export default StudentDetails;