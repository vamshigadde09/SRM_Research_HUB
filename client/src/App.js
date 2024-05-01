import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashbord from "./pages/AdminDashbord";
import StudentDashbord from "./pages/StudentDashbord";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminDashbord />} />
          <Route path="/student" element={<StudentDashbord />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
