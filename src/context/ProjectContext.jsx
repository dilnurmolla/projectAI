import { createContext, useContext, useState, useEffect } from "react";
import { PROJECT_STEPS } from "../data/projectSteps";

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [activeStepId, setActiveStepId] = useState(PROJECT_STEPS[0].id);
  const [activeProjectName, setActiveProjectName] = useState(null);

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projectAI_projects");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("projectAI_projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = (name, description) => {
    const newProject = {
      id: `proj_${Date.now()}`,
      name: name,
      description: description || "Tanım girilmedi.",
      date: new Date().toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      status: "Draft",
    };
    setProjects((prev) => [newProject, ...prev]);
  };

  const value = {
    activeStepId,
    setActiveStepId,
    activeProjectName,
    setActiveProjectName,
    projects,
    addProject,
    PROJECT_STEPS,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
}
