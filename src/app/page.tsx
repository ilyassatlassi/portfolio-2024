
import React from "react";
import NavBar from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from '@/components/About'
import Contact from '@/components/Contact/Contact'
import Project from '@/components/Projects'
import SectionDivider from "@/components/dividerSection";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center mx-auto sm:p-4">
      <Hero />
      <SectionDivider/>
      <Project />
      <About />
      <Contact />
    </main>
  );
};

export default page;
