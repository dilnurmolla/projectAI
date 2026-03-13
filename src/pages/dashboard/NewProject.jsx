import { useMemo, useState, useRef, useEffect } from "react";
import { useProject } from "../../context/useProject";
import { ProgramSelectionCard } from "../../components/project/ProgramSelectionCard";
import { TemplateIntroCard } from "../../components/project/TemplateIntroCard";
import { DynamicProjectForm } from "../../components/project/DynamicProjectForm";
import { PROGRAM_TEMPLATES } from "../../data/programTemplates";
import { AiPanel } from "../../components/dashboard/AiPanel";
import { CallSelectionView } from "../../components/project/CallSelectionView";

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
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                    selectedIde === ide.id
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

function ProgramSelection({ onNext }) {
  const [selectedProgramId, setSelectedProgramId] = useState(null);

  const handleNext = () => {
    const prog = PROGRAM_TEMPLATES.find((p) => p.id === selectedProgramId);
    if (prog) {
      onNext(selectedProgramId);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="border-b border-slate-100 pb-5">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Program ve Şablon Seçimi
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Projenizin başvuracağı kurumu ve programı seçerek yapay zekanın ilgili
          kılavuz kurallarına göre çalışmasını sağlayın.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {PROGRAM_TEMPLATES.map((prog) => (
          <ProgramSelectionCard
            key={prog.id}
            prog={prog}
            isSelected={selectedProgramId === prog.id}
            onSelect={() => setSelectedProgramId(prog.id)}
          />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-end border-t border-slate-100 pt-5">
        <button
          disabled={!selectedProgramId}
          onClick={handleNext}
          className="rounded-full bg-[#1B5CFF] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1554C3] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Şablonu Seç ve İlerle
        </button>
      </div>
    </div>
  );
}

function StepContent({
  stepId,
  onNext,
  setActiveProjectName,
  addProject,
  selectedProgramId,
  setSelectedProgramId,
  templateType,
  selectedCallId,
  setSelectedCallId,
  handleBack,
}) {
  const currentProg = useMemo(
    () => PROGRAM_TEMPLATES.find((p) => p.id === selectedProgramId),
    [selectedProgramId],
  );

  if (stepId === "program") {
    if (!templateType) {
      return (
        <ProgramSelection
          onNext={(progId) => {
            setSelectedProgramId(progId);
          }}
        />
      );
    }

    return (
      <TemplateIntroCard
        prog={currentProg}
        onBack={() => setSelectedProgramId(null)}
        onContinue={onNext}
      />
    );
  }

  if (stepId === "setup") {
    return (
        <ProjectSetup
          onNext={(formData) => {
            setActiveProjectName(formData || "Yeni Proje");
            addProject(formData || "Yeni Proje", "Draft");
            onNext();
          }}
          onBack={handleBack}
        />
    );
  }

  if (stepId === "call") {
    return (
      <CallSelectionView
        templateType={templateType}
        initialCallId={selectedCallId}
        onNext={(callData) => {
          setSelectedCallId(callData?.id || "custom");
          onNext();
        }}
        onBack={handleBack}
      />
    );
  }

  const isFormStep = [
    "company",
    "problem",
    "solution",
    "innovation",
    "budget",
    "risks",
    "impact",
  ].includes(stepId);

  if (isFormStep) {
    return (
      <DynamicProjectForm
        key={`${templateType}-${selectedCallId || "default"}`}
        templateType={templateType}
        selectedCallId={selectedCallId}
        activeStepId={stepId}
        onNext={onNext}
        onSave={(draft) => console.log("Taslak kaydedildi:", draft)}
      />
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Adım: {stepId}</h2>
      <p className="mt-2 text-sm text-slate-600">
        Gerçek başvuru formu oluşturuldu. Artık AI modasıyla baş başayız.
      </p>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={handleBack}
          className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Geri
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

  const [selectedProgramId, setSelectedProgramId] = useState(null);
  const [selectedCallId, setSelectedCallId] = useState(null);

  const selectedProgram = useMemo(
    () => PROGRAM_TEMPLATES.find((p) => p.id === selectedProgramId),
    [selectedProgramId],
  );
  const resolvedTemplateType = selectedProgram?.templateType || null;

  const handleNext = () => {
    const currentIndex = PROJECT_STEPS.findIndex((s) => s.id === activeStepId);
    if (currentIndex < PROJECT_STEPS.length - 1) {
      setActiveStepId(PROJECT_STEPS[currentIndex + 1].id);
    }
  };

  const handleBack = () => {
    const currentIndex = PROJECT_STEPS.findIndex((s) => s.id === activeStepId);
    if (currentIndex > 0) {
      setActiveStepId(PROJECT_STEPS[currentIndex - 1].id);
    }
  };

  return (
    <div
      className={`grid gap-6 ${activeStepId === "call" ? "lg:grid-cols-1" : "lg:grid-cols-[1fr_320px]"}`}
    >
      <StepContent
        stepId={activeStepId}
        onNext={handleNext}
        handleBack={handleBack}
        setActiveProjectName={setActiveProjectName}
        addProject={addProject}
        selectedProgramId={selectedProgramId}
        setSelectedProgramId={setSelectedProgramId}
        templateType={resolvedTemplateType}
        selectedCallId={selectedCallId}
        setSelectedCallId={setSelectedCallId}
      />

      {activeStepId !== "call" && (
        <div className="flex flex-col gap-6">
          <AiPanel stepLabel={activeLabel} templateType={resolvedTemplateType} />
        </div>
      )}
    </div>
  );
}

function ProjectSetup({ onNext, onBack }) {
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
              className={`relative flex cursor-pointer rounded-xl border p-4 transition-all ${
                projectType === "scratch"
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
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    projectType === "scratch"
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
              className={`relative flex cursor-pointer rounded-xl border p-4 transition-all ${
                projectType === "existing"
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
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    projectType === "existing"
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

      <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
        <button
          onClick={onBack}
          className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Geri
        </button>
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
