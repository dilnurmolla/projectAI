import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const authEmail = localStorage.getItem("projectAI_auth");

  if (!authEmail) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
