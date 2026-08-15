import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import SoftwarePage from "./pages/SoftwarePage";
import ResearchPage from "./pages/ResearchPage";
import ClubPage from "./pages/ClubPage";

import "./main.css";
import ResumePage from "./pages/ResumePage";

export default function App() {
  return (
    <>
      <div className="background"></div>

      <Navigation />

      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/software" element={<SoftwarePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/clubs" element={<ClubPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>

        <footer>
          <p>© 2026 Michael Capriotti</p>
        </footer>
      </main>
    </>
  );
}