import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import StudentDashboard from "./Components/StudentDashboard";
import ResearchArchive from "./Pages/ReserachPages/AllResearch";
import PaperDetail from "./Pages/ReserachPages/SinglePaper";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Dashboard from "./Pages/Admin/Dashboard";
import UserManagement from "./Pages/Admin/UserManagement";
import SubmissionsManagement from "./Pages/Admin/SubmissionsManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/allresearches" element={<ResearchArchive />} />
        <Route path="/paper/:id" element={<PaperDetail />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/submissions" element={<SubmissionsManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
