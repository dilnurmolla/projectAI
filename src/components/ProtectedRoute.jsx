import { Navigate, Outlet } from "react-router-dom";
import { getActiveAuthEmail } from "../utils/accountStorage";

export default function ProtectedRoute() {
  const authEmail = getActiveAuthEmail();

  if (!authEmail) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
