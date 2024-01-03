"use client";
import { links } from "@/lib/data";
import React, { createContext, useContext, useState } from "react";

type SectionName = (typeof links)[number]["name"];

type ActiveSectionProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
//   timeOfLastClick: number;
//   setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);
function ActiveSectionProvider({ children }: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Hero");
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionProvider;

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}