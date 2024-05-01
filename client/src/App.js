import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashbord from "./pages/AdminDashbord";
import StudentDashbord from "./pages/StudentDashbord";
import TeacherDashbord from "./pages/TeacherDashbord";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashbord />} />
        <Route path="/student" element={<StudentDashbord />} />
        <Route path="/teacher" element={<TeacherDashbord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
