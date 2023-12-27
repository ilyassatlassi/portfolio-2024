
import React from "react";
import About from '@/components/About'
import Contact from '@/components/Contact/Contact'
import SectionDivider from "@/components/dividerSection";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero/Hero";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center mx-auto sm:p-4">
      <Hero />
      <SectionDivider/>
      <Projects />
      <About />
      <Contact />
    </main>
  );
};

export default page;
