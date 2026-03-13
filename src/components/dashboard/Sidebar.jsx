import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useProject } from "../../context/useProject";
import { logoutUser } from "../../utils/accountStorage";

const itemBase =
  "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition";
const itemActive = "bg-white text-slate-900 shadow-sm";
const itemIdle = "text-slate-600 hover:bg-white/70 hover:text-slate-900";

function SidebarLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${itemBase} ${isActive ? itemActive : itemIdle}`
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={`h-2.5 w-2.5 shrink-0 rounded-full ${
              isActive ? "bg-[#185ED8]" : "bg-slate-300"
            }`}
          />
          {children}
        </>
      )}
    </NavLink>
  );
}

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { activeStepId, setActiveStepId, PROJECT_STEPS, activeProjectName } =
    useProject();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <aside className="sticky top-6 h-[calc(100vh-48px)] w-[280px] shrink-0 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3 px-3 py-2">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[linear-gradient(180deg,#185ED8_0%,#2E6FDB_40%,#6C9EE5_100%)] text-white">
          AI
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">ProjectAI</div>
          <div className="text-xs text-slate-500">Dashboard</div>
        </div>
      </div>

      <nav className="mt-4 space-y-2">
        {(location.pathname === "/dashboard/new" || activeProjectName) && (
          <SidebarLink to="/dashboard/new">
            {activeProjectName ? activeProjectName : "Yeni Proje"}
          </SidebarLink>
        )}

        {location.pathname === "/dashboard/new" && (
          <div className="ml-6 mt-2 mb-4 space-y-1 border-l-2 border-slate-100 pl-3">
            {PROJECT_STEPS.map((step, idx) => {
              const isActive = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={[
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-xs font-medium transition",
                    isActive
                      ? "bg-[#EFF5FF] text-[#185ED8]"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-700",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px]",
                      isActive
                        ? "bg-[#185ED8] text-white"
                        : "bg-slate-200 text-slate-500",
                    ].join(" ")}
                  >
                    {idx + 1}
                  </span>
                  <span className="truncate">{step.label}</span>
                </button>
              );
            })}
          </div>
        )}

        <SidebarLink to="/dashboard/projects">Projelerim</SidebarLink>
        <SidebarLink to="/dashboard/templates">Şablonlar</SidebarLink>
        <SidebarLink to="/dashboard/score">Puan Analizi</SidebarLink>
        <SidebarLink to="/dashboard/outputs">Çıktılarım</SidebarLink>
      </nav>

      <div className="mt-6 rounded-2xl bg-[#EFF5FF] p-4">
        <div className="text-xs font-semibold text-[#185ED8]">İpucu</div>
        <div className="mt-1 text-xs text-slate-700">
          Yeni proje akışında her adım otomatik kaydedilir.
        </div>
      </div>

      <div className="mt-auto pt-6">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-red-600"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Çıkış Yap
        </button>
      </div>
    </aside>
  );
}
