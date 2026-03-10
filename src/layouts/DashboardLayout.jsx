import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import { ProjectProvider } from "../context/ProjectContext";

export default function DashboardLayout() {
  return (
    <ProjectProvider>
      <div className="flex min-h-screen bg-slate-50 p-6">
        <Sidebar />
        <main className="ml-6 flex flex-1 flex-col">
          <Topbar />
          <div className="mt-6 flex-1">
            <Outlet />
          </div>
        </main>
      </div>
    </ProjectProvider>
  );
}
