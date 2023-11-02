"use client"
import PopUpCard from "@/elements/PopUpCard";
import ProjectCard from "@/elements/ProjectCard";
import { useState } from "react";


const Project = () => {
  const [PopUp, SetPopUp] = useState(false);

  const handlePopUp = () => {
    SetPopUp(!PopUp);
  };
  return (
    <section className="" id="project">
      {/* className={`bg-[#CFD8DC] py-28 px-6 lg:p-36 flex flex-col lg:gap-36 gap-[88px] ${
          PopUp ? "hidden" : ""
        }`} */}
      <div
        className="bg-[#CFD8DC] py-28 px-6 lg:p-36  flex flex-col lg:gap-36 gap-[88px]"
      >
        <ProjectCard handlePopUp={handlePopUp} />
        <ProjectCard handlePopUp={handlePopUp} />
      </div>
      <div
        className={`lg:py-20 lg:px-36 z-40 fixed h-screen w-full top-0 bottom-0 overflow-auto px-4 py-14 bg-[#C1C7D0] bg-opacity-80  ${
          PopUp ? "" : "hidden"
        }`}
      >
        <PopUpCard handlePopUp={handlePopUp} />
      </div>
    </section>
  );
}

export default Project;
