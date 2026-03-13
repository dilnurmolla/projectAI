import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addAccountUpdateListener,
  getActiveUser,
  logoutUser,
} from "../../utils/accountStorage";

function titleFromPath(pathname) {
  if (pathname.includes("/dashboard/new")) return "Yeni Proje";
  if (pathname.includes("/dashboard/projects")) return "Projelerim";
  if (pathname.includes("/dashboard/templates")) return "Şablonlar";
  if (pathname.includes("/dashboard/score")) return "Puan Analizi";
  if (pathname.includes("/dashboard/outputs")) return "Çıktılarım";
  if (pathname.includes("/dashboard/account")) return "Hesap Ayarları";
  return "Dashboard";
}

export default function Topbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeUser, setActiveUser] = useState(() => getActiveUser().user);
  const fullName = activeUser?.fullName || "Brave admin";
  const activeEmail = activeUser?.email || "";

  useEffect(() => {
    function handlePointerDown(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => addAccountUpdateListener(() => {
    setActiveUser(getActiveUser().user);
  }), []);

  const handleNavigateMenu = (section) => {
    navigate(`/dashboard/account?section=${section}`);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logoutUser();
    setIsMenuOpen(false);
    navigate("/login");
  };

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

          <div className="relative ml-2" ref={menuRef}>
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex items-center gap-3 rounded-full border border-transparent px-2 py-1.5 text-left transition hover:border-slate-200 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-[#1B5CFF]/10"
              aria-haspopup="menu"
              aria-expanded={isMenuOpen}
            >
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#185ED8] text-white">
                <span className="text-sm font-semibold">
                  {fullName.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="hidden text-left sm:block">
                <div className="text-sm font-medium text-slate-700">{fullName}</div>
                <div className="text-xs text-slate-400">{activeEmail}</div>
              </div>
              <svg
                className={`h-4 w-4 text-slate-400 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
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
            </button>

            {isMenuOpen && (
              <div
                role="menu"
                className="absolute right-0 top-[calc(100%+10px)] z-20 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_45px_-24px_rgba(15,23,42,0.35)]"
              >
                <button
                  type="button"
                  onClick={() => handleNavigateMenu("general")}
                  className="flex w-full items-center rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                  role="menuitem"
                >
                  Hesap Ayarları
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigateMenu("notifications")}
                  className="flex w-full items-center rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                  role="menuitem"
                >
                  Bildirim Tercihleri
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigateMenu("security")}
                  className="flex w-full items-center rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                  role="menuitem"
                >
                  Güvenlik
                </button>
                <div className="my-2 h-px bg-slate-100" />
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
                  role="menuitem"
                >
                  Çıkış Yap
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
