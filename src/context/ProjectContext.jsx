import { createContext, useContext, useState } from "react";
import { PROJECT_STEPS } from "../data/projectSteps";

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [activeStepId, setActiveStepId] = useState(PROJECT_STEPS[0].id);

  const value = {
    activeStepId,
    setActiveStepId,
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
