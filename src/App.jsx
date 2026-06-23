import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DomainSelection from "./pages/DomainSelection";
import SkillsSelection from "./pages/SkillsSelection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/domains" element={<DomainSelection />} />
        <Route path="/skills" element={<SkillsSelection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
