import { useMemo, useState, useRef, useEffect } from "react";
import { useProject } from "../../context/ProjectContext";

const PROGRAMS = [
  {
    id: "tubitak_1512",
    name: "TÜBİTAK 1512 (BiGG)",
    desc: "Teknoloji odaklı girişimler için çekirdek sermaye desteği.",
    color: "bg-[#EFF5FF] text-[#1B5CFF] border-[#BFD4FF]",
    badge: "Popüler",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: "kosgeb_yeni",
    name: "KOSGEB İleri Girişimci",
    desc: "Yeni girişimcilere kuruluş ve makine-teçhizat hibesi.",
    color: "bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]",
    badge: "KOBİ / Girişim",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    id: "ttgv",
    name: "TTGV Finansmanı",
    desc: "Türkiye Teknoloji Geliştirme Vakfı yatırım destekleri.",
    color: "bg-[#ECFEFF] text-[#0891B2] border-[#A5F3FC]",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "kalkinma",
    name: "Kalkınma Ajansları",
    desc: "Bölgesel projelere hibe ve kapasite geliştirme desteği.",
    color: "bg-[#FFF7ED] text-[#EA580C] border-[#FFEDD5]",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "undp",
    name: "Birleşmiş Milletler (UNDP)",
    desc: "Sosyal girişim ve sürdürülebilirlik (SDG) odaklı hibe.",
    color: "bg-[#F0F9FF] text-[#0284C7] border-[#BAE6FD]",
    badge: "Sosyal Etki",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    id: "teydeb",
    name: "TÜBİTAK TEYDEB",
    desc: "Ölçeklenebilir sanayi Ar-Ge projelerine özel destekler.",
    color: "bg-[#EFF6FF] text-[#1E3A8A] border-[#BFDBFE]",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    id: "teknopark",
    name: "Teknoparklar (TGB)",
    desc: "Startup'lar için kuluçka, ofis ve vergi avantajı.",
    color: "bg-[#FAF5FF] text-[#9333EA] border-[#E9D5FF]",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];

const ALL_IDES = [
  { id: "vscode", label: "VS Code", icon: "💻" },
  { id: "cursor", label: "Cursor AI", icon: "🤖" },
  { id: "intellij", label: "IntelliJ IDEA", icon: "☕️" },
  { id: "webstorm", label: "WebStorm", icon: "🌐" },
  { id: "pycharm", label: "PyCharm", icon: "🐍" },
  { id: "androidstudio", label: "Android Studio", icon: "📱" },
  { id: "xcode", label: "Xcode", icon: "🍏" },
  { id: "eclipse", label: "Eclipse", icon: "🌙" },
  { id: "visualstudio", label: "Visual Studio", icon: "♾️" },
  { id: "sublime", label: "Sublime Text", icon: "📝" },
  { id: "vim", label: "Vim / Neovim", icon: "⌨️" },
  { id: "emacs", label: "Emacs", icon: "🐃" },
  { id: "fleet", label: "JetBrains Fleet", icon: "🚀" },
  { id: "zed", label: "Zed", icon: "⚡️" },
  { id: "jupyter", label: "Jupyter Notebook", icon: "📓" },
  { id: "phpstorm", label: "PhpStorm", icon: "🐘" },
  { id: "rubymine", label: "RubyMine", icon: "💎" },
  { id: "other", label: "Diğer / Custom", icon: "🛠" },
];

function IdeSelector({ selectedIde, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const selected = ALL_IDES.find((i) => i.id === selectedIde) || ALL_IDES[0];

  const filtered = useMemo(() => {
    if (!searchTerm) return ALL_IDES;
    return ALL_IDES.filter((ide) =>
      ide.label.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition hover:border-[#1B5CFF] focus:border-[#1B5CFF] focus:ring-4 focus:ring-[#1B5CFF]/20"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{selected.icon}</span>
          <span className="font-medium">{selected.label}</span>
        </div>
        <svg
          className={`h-5 w-5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
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

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
          <div className="border-b border-slate-100 p-2">
            <input
              type="text"
              placeholder="IDE Ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none focus:bg-white focus:ring-2 focus:ring-[#1B5CFF]/50"
              autoFocus
            />
          </div>
          <div className="max-h-60 overflow-y-auto p-1">
            {filtered.length > 0 ? (
              filtered.map((ide) => (
                <button
                  key={ide.id}
                  onClick={() => {
                    onChange(ide.id);
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${selectedIde === ide.id
                    ? "bg-[#EFF5FF] text-[#1B5CFF] font-medium"
                    : "text-slate-700 hover:bg-slate-50"
                    }`}
                >
                  <span className="text-lg">{ide.icon}</span>
                  <span>{ide.label}</span>
                  {selectedIde === ide.id && (
                    <svg
                      className="ml-auto h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))
            ) : (
              <div className="py-4 text-center text-sm text-slate-500">
                Sonuç bulunamadı
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function AiPanel({ stepLabel }) {
  return (
    <div className="sticky top-6 space-y-4">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-900">
            AI Önerileri
          </div>
          <span className="rounded-full bg-[#EFF5FF] px-3 py-1 text-xs font-semibold text-[#185ED8]">
            {stepLabel}
          </span>
        </div>

        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          <li>• Bu adım için kriterlere göre 3 öneri gösterilecek.</li>
          <li>• Eksik alanlar tespit edilip “Uygula” ile editöre yazılacak.</li>
          <li>• Her öneri “Neden?” açıklaması + geri al (undo) destekler.</li>
        </ul>
      </div>

      <button className="w-full rounded-3xl bg-[#185ED8] px-5 py-4 text-sm font-semibold text-white hover:bg-[#1554C3]">
        Geliştir
      </button>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="text-sm font-semibold text-slate-900">Yazım Modu</div>
        <div className="mt-3 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
          <div>
            <div className="text-sm font-medium text-slate-900">
              Daha teknik yaz
            </div>
            <div className="text-xs text-slate-500">
              Terminoloji + KPI odaklı
            </div>
          </div>
          <button className="rounded-full bg-[#EFF5FF] px-4 py-2 text-xs font-semibold text-[#185ED8] hover:bg-[#CFE0FF]">
            Aç
          </button>
        </div>
      </div>
    </div>
  );
}

function StepContent({ stepId, onNext, setActiveProjectName, addProject }) {
  if (stepId === "program") {
    return <ProgramSelection onNext={onNext} />;
  }

  if (stepId === "setup") {
    return (
      <ProjectSetup
        onNext={(name, desc) => {
          setActiveProjectName(name);
          addProject(name, desc);
          onNext();
        }}
      />
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Adım: {stepId}</h2>
      <p className="mt-2 text-sm text-slate-600">
        Buraya bu adımın gerçek form/editör UI’sı gelecek.
      </p>

      <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
        <div className="font-semibold text-slate-900">Teknik not</div>
        <div className="mt-1">
          Bu alan wizard state’e bağlı olacak (autosave, validation,
          versioning).
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          Geri
        </button>
        <button
          onClick={onNext}
          className="rounded-full bg-[#185ED8] px-6 py-2 text-sm font-semibold text-white hover:bg-[#1554C3]"
        >
          Devam
        </button>
      </div>
    </div>
  );
}

export default function NewProject() {
  const {
    activeStepId,
    setActiveStepId,
    PROJECT_STEPS,
    setActiveProjectName,
    addProject,
  } = useProject();

  const activeLabel = useMemo(
    () => PROJECT_STEPS.find((s) => s.id === activeStepId)?.label || "",
    [activeStepId, PROJECT_STEPS],
  );

  const handleNext = () => {
    const currentIndex = PROJECT_STEPS.findIndex((s) => s.id === activeStepId);
    if (currentIndex < PROJECT_STEPS.length - 1) {
      setActiveStepId(PROJECT_STEPS[currentIndex + 1].id);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <StepContent
        stepId={activeStepId}
        onNext={handleNext}
        setActiveProjectName={setActiveProjectName}
        addProject={addProject}
      />

      <div className="flex flex-col gap-6">
        <AiPanel stepLabel={activeLabel} />
      </div>
    </div>
  );
}

function ProjectSetup({ onNext }) {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedIde, setSelectedIde] = useState("vscode");
  const [projectType, setProjectType] = useState("scratch");

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="border-b border-slate-100 pb-5">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Proje Kimliği
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Projenizin ismini, teknoloji yığınını ve temel bağlamını belirleyerek
          AI asistanını yönlendirin.
        </p>
      </div>

      <div className="mt-6 space-y-8">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            Temel Bilgiler
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <label className="mb-2 block text-xs font-medium text-slate-700">
                Proje Adı <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Örn: AI Destekli CRM"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-[#1B5CFF] focus:ring-4 focus:ring-[#1B5CFF]/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium text-slate-700">
                Kısa Açıklama (Opsiyonel)
              </label>
              <textarea
                rows="6"
                placeholder="Bu proje ne hakkında? Hangi problemi çözüyor?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1B5CFF] focus:ring-4 focus:ring-[#1B5CFF]/20"
              />
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-slate-100" />
        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            Geliştirme Ortamı & Teknoloji
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            Kullandığınız araçları seçmek, AI'ın teknik kurguyu daha iyi
            yapmasını sağlar.
          </p>

          <div className="mt-4">
            <label className="mb-2 block text-xs font-medium text-slate-700">
              Kullanılan IDE
            </label>
            <IdeSelector selectedIde={selectedIde} onChange={setSelectedIde} />
          </div>
        </div>

        <div className="h-px w-full bg-slate-100" />
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Proje Durumu</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label
              className={`relative flex cursor-pointer rounded-xl border p-4 transition-all ${projectType === "scratch"
                ? "border-[#1B5CFF] bg-[#EFF5FF]"
                : "border-slate-200 bg-white hover:bg-slate-50"
                }`}
            >
              <input
                type="radio"
                name="project_type"
                value="scratch"
                checked={projectType === "scratch"}
                onChange={(e) => setProjectType(e.target.value)}
                className="peer sr-only"
              />
              <div className="flex w-full items-start gap-3">
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${projectType === "scratch"
                    ? "border-[#1B5CFF] bg-[#1B5CFF]"
                    : "border-slate-300 bg-white"
                    }`}
                >
                  <div
                    className={`h-2 w-2 rounded-full ${projectType === "scratch" ? "bg-white" : "bg-transparent"}`}
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900">
                    Sıfırdan Proje (Ideation)
                  </div>
                  <div
                    className={`mt-1 text-xs ${projectType === "scratch" ? "text-slate-700" : "text-slate-500"}`}
                  >
                    Henüz fikir aşamasında, her şeyi baştan kurgulayacağız.
                  </div>
                </div>
              </div>
            </label>

            <label
              className={`relative flex cursor-pointer rounded-xl border p-4 transition-all ${projectType === "existing"
                ? "border-[#1B5CFF] bg-[#EFF5FF]"
                : "border-slate-200 bg-white hover:bg-slate-50"
                }`}
            >
              <input
                type="radio"
                name="project_type"
                value="existing"
                checked={projectType === "existing"}
                onChange={(e) => setProjectType(e.target.value)}
                className="peer sr-only"
              />
              <div className="flex w-full items-start gap-3">
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${projectType === "existing"
                    ? "border-[#1B5CFF] bg-[#1B5CFF]"
                    : "border-slate-300 bg-white"
                    }`}
                >
                  <div
                    className={`h-2 w-2 rounded-full ${projectType === "existing" ? "bg-white" : "bg-transparent"}`}
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900">
                    Mevcut Proje Üzerinden
                  </div>
                  <div
                    className={`mt-1 text-xs ${projectType === "existing" ? "text-slate-700" : "text-slate-500"}`}
                  >
                    Var olan bir girişimi veya projeyi hibe formatına
                    çevireceğiz.
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-end border-t border-slate-100 pt-5">
        <button
          disabled={!projectName.trim()}
          onClick={() => onNext(projectName, description)}
          className="rounded-full bg-[#1B5CFF] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1554C3] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Projeyi Başlat ve Devam Et
        </button>
      </div>
    </div>
  );
}

function ProgramSelection({ onNext }) {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="border-b border-slate-100 pb-5">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Program ve Şablon Seçimi
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Projenizin başvuracağı kurumu ve programı seçerek yapay zekanın ilgili
          kılavuz kurallarına ve puanlama metriklerine göre çalışmasını
          sağlayın.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {PROGRAMS.map((prog) => {
          const isSelected = selectedProgram === prog.id;
          return (
            <div
              key={prog.id}
              onClick={() => setSelectedProgram(prog.id)}
              className={`group relative cursor-pointer rounded-2xl border p-5 transition-all duration-200 ${isSelected
                ? "border-[#1B5CFF] bg-[#F4F7FF] shadow-[0_0_0_1px_#1B5CFF]"
                : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                }`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border ${prog.color} shadow-sm transition-transform group-hover:scale-110`}
                >
                  {prog.icon}
                </div>
                {prog.badge && (
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-600 uppercase">
                    {prog.badge}
                  </span>
                )}
              </div>

              <div className="mt-4">
                <h3
                  className={`font-semibold ${isSelected ? "text-[#1B5CFF]" : "text-slate-900"
                    }`}
                >
                  {prog.name}
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                  {prog.desc}
                </p>
              </div>

              {isSelected && (
                <div className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#1B5CFF] text-white shadow-sm ring-2 ring-white">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-end border-t border-slate-100 pt-5">
        <button
          disabled={!selectedProgram}
          onClick={() => onNext()}
          className="rounded-full bg-[#1B5CFF] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1554C3] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Şablonu Seç ve İlerle
        </button>
      </div>
    </div>
  );
}
