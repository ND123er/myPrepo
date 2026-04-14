import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
//older than 13-04-2026
export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("user"));

//     if (!data) {
//       navigate("/login");
//     } else {
//       setUser(data);
//     }
//   }, []);
useEffect(() => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const data = JSON.parse(localStorage.getItem("user"));

  if (!isLoggedIn || !data) {
    navigate("/login");
  } else {
    setUser(data);
  }
}, []);

  if (!user) return null;

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-96 text-center">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>

          <button onClick={() => setShow(true)} className="btn mt-4">
            More Info
          </button>
        </div>

        {show && (
          <Modal address={user.address} close={() => setShow(false)} />
        )}
      </div>
    </>
  );
}