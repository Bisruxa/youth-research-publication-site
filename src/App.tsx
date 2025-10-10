import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ResearchArchive from "./Pages/ReserachPages/AllResearch";
import PaperDetail from "./Pages/ReserachPages/SinglePaper";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/allresearches" element={<ResearchArchive />} />
        <Route path="/paper/:id" element={<PaperDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
