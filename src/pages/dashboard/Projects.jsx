import { useNavigate } from "react-router-dom";
import { useProject } from "../../context/useProject";
import { PROJECT_STEPS } from "../../data/projectSteps";

export default function Projects() {
  const navigate = useNavigate();
  const { setActiveProjectName, setActiveStepId, projects } = useProject();

  const handleStartNew = () => {
    setActiveProjectName(null);
    setActiveStepId(PROJECT_STEPS[0].id);
    navigate("/dashboard/new");
  };

  const handleOpenProject = (projectName) => {
    setActiveProjectName(projectName);
    setActiveStepId(PROJECT_STEPS[0].id);
    navigate("/dashboard/new");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Projelerim</h2>
          <p className="mt-1 text-sm text-slate-500">
            Tüm aktif ve taslak projelerinizi buradan yönetin.
          </p>
        </div>
        <button
          onClick={handleStartNew}
          className="rounded-full bg-[#185ED8] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1554C3]"
        >
          + Yeni Proje Oluştur
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenProject(project.name)}
            className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#1B5CFF] hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="rounded-xl bg-[#EFF5FF] p-3 text-[#1B5CFF]">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${project.status === "Completed"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-amber-50 text-amber-600"
                  }`}
              >
                {project.status}
              </span>
            </div>

            <div className="mt-5">
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#1B5CFF] transition-colors">
                {project.name}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-slate-500">
                {project.description}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-medium text-slate-400">
              <span>Son güncellenme: {project.date}</span>
              <span className="flex items-center gap-1 font-semibold text-[#1B5CFF] opacity-0 transition-opacity group-hover:opacity-100">
                Devam Et →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
