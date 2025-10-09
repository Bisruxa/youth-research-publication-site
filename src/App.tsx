import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import StudentDashboard from "./components/StudentDashboard";
import ReviwerDashboard from "./pages/ReviwerDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/reviewer" element={<ReviwerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
