import { useActiveSectionContext } from "@/context/activeSection";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { links } from "./data";

type SectionName = (typeof links)[number]["name"];

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);

  return {
    ref,
  };
}
