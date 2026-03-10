import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

import DashboardLayout from "./layouts/DashboardLayout";
import NewProject from "./pages/dashboard/NewProject";
import Projects from "./pages/dashboard/Projects";
import Templates from "./pages/dashboard/Templates";
import Score from "./pages/dashboard/Score";
import Outputs from "./pages/dashboard/Outputs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Navigate to="projects" replace />} />
            <Route path="new" element={<NewProject />} />
            <Route path="projects" element={<Projects />} />
            <Route path="templates" element={<Templates />} />
            <Route path="score" element={<Score />} />
            <Route path="outputs" element={<Outputs />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
