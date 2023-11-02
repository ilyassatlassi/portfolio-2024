
import React from "react";
import NavBar from "@/components/NavBar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from '@/components/About'
import Contact from '@/components/Contact/Contact'
import Project from '@/components/Projects'

const page = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Project />
      <About />
      <Contact />
    </>
  );
};

export default page;
