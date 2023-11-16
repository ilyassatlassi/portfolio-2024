"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import hamburger from "../../assets/normal-button-tertiary-icons-icon-menu.svg";
import cancel from "../../assets/normal-button-tertiary-icons-icon-cancel.svg";
import Link from "next/link";

const NavBar = () => {
  const [Nav, SetNav] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    SetNav(!Nav);
  };

  const navAnimation = "transition delay-300 duration-2000 ease-in-out transform hover:scale-105"

  return (
    <header className={`${Nav ? "static" : "fixed"} bg-white top-0  py-0 px-6 w-full z-[99] shadow-sm lg:hover:shadow-2xl opacity-100 lg:hover:opacity-100 lg:transition-opacity lg:ease-in-out duration-300  ${showHeader ? "lg:shadow-2xl" : "lg:opacity-0"
      }`}>

      <div className={`${Nav ? "flex fixed left-0 right-0 bottom-0 top-0 z-30 w-screen  bg-[#6070FF]  mix-blend-multiply  font-bold text-3xl backdrop-blur-2xl text-white p-3" : "hidden"}`}>
        <div className="inline-block ">
          <button onClick={handleNav} className="p-2 fixed right-6 top-3">
            <Image priority={true} src={cancel} alt="Cancel button" />
          </button>
        </div>
        <nav>
          <ul className="flex flex-col pt-2 gap-2">
            <li className="p-4">
              <a
                className="cursor-pointer hover:text-gray-400"
                href="#project"
                onClick={handleNav}
              >
                Portfolio
              </a>
            </li>
            <li className="p-4">
              <a className="cursor-pointer hover:text-gray-400" onClick={handleNav} href="#About">
                About
              </a>
            </li>
            <li className="p-4">
              <a
                className="cursor-pointer hover:text-gray-400"
                href="#Contact" onClick={handleNav}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`max-w-[1200px] min-h-[4rem] mx-auto my-0 flex items-center justify-between `}>
        <Link href={'/'} className="text-center cursor-pointer  text-[#6070FF] text-lg font-bold leading-tight">
          My Logo
        </Link>

        <nav className="hidden lg:flex">
          <ul className="flex gap-4 font-medium text-base">
            <li className={navAnimation}>
              <a className="text-[#344563]" href="#hero" >
                Portfolio
              </a>
            </li>
            <li className={navAnimation}>
              <a className="text-[#344563]" href="#About">
                About
              </a>
            </li>
            <li className={navAnimation}>
              <a className="text-[#344563]" href="#Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={handleNav} className="lg:hidden">
          <Image priority={true} src={hamburger} alt="Hamburger button" />
        </button>
      </div>
    </header>
  );
}

export default NavBar