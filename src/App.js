import logo from "./logo.svg";
import "./App.css";
import LayoutDashboard from "./Layout/LayoutDashboard";
import Dashboard from "./pages/dashboard/Dashboard";
import { Navigate, Route, Routes } from "react-router-dom";
import Articles from "./pages/dashboard/Articles";
import Projects from "./pages/dashboard/Projects";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="articles" element={<Articles />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
