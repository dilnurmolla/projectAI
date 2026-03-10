import { useLocation } from "react-router-dom";

function titleFromPath(pathname) {
  if (pathname.includes("/dashboard/new")) return "Yeni Proje";
  if (pathname.includes("/dashboard/projects")) return "Projelerim";
  if (pathname.includes("/dashboard/templates")) return "Şablonlar";
  if (pathname.includes("/dashboard/score")) return "Puan Analizi";
  if (pathname.includes("/dashboard/outputs")) return "Çıktılarım";
  return "Dashboard";
}

export default function Topbar() {
  const { pathname } = useLocation();

  const userStr = localStorage.getItem("projectAI_users");
  const users = userStr ? JSON.parse(userStr) : [];
  const activeUserEmail = localStorage.getItem("projectAI_auth");
  const activeUser = users.find((u) => u.email === activeUserEmail);
  const fullName = activeUser?.fullName || "Brave admin";

  return (
    <header className="rounded-3xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-lg font-semibold text-slate-900">
            {titleFromPath(pathname)}
          </h1>
          <p className="text-xs text-slate-500">
            Proje akışınızı adım adım yönetin
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 cursor-pointer">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            TR
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>

          <div className="ml-2 flex items-center gap-2 cursor-pointer">
            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-[#185ED8] text-white">
              <span className="text-sm font-semibold">
                {fullName.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="text-sm font-medium text-slate-700">
              {fullName}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
