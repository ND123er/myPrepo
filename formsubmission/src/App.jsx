import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StudentDetails from "./pages/StudentDetails";
import "./app.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/student/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


