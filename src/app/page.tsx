
import React from "react";
import NavBar from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from '@/components/About'
import Contact from '@/components/Contact/Contact'
import Project from '@/components/Projects'

const page = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Project />
      <About />
      <Contact />
    </main>
  );
};

export default page;
