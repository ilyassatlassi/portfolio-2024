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
  return (
    <header className="">
      
      <div className={`${Nav ? "flex fixed bottom-0 top-0 z-30 w-screen bg-[#6070FF]  mix-blend-multiply  font-bold text-3xl backdrop-blur-2xl text-white p-3" : "hidden"}`}>
        <div className=" ">
          <div className="inline-block ">
            <button onClick={handleNav} className="p-2 fixed right-6 top-3">
              <Image src={cancel} alt="Cancel button" />
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
      </div>
      <div
        className={` h-16 fixed opacity-100  lg:hover:opacity-100 lg:transition-opacity lg:ease-in-out duration-300 inline-block w-full  z-20 shadow-sm lg:shadow-2xl ${showHeader ? "" : "lg:opacity-0"
          }`}
      >
        <div className=" bg-white flex items-center justify-between pr-6 pl-3 py-1 lg:px-36 lg:py-4 ">
          <Link href={'/'}>
            <div className="text-center cursor-pointer  text-indigo-500 text-lg font-bold leading-tight py-[10px] px-3  ">
            My Logo
          </div>
          </Link>
          
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-[10px] font-poppins font-medium text-base">
              <li className="px-3 py-4 transition delay-700 duration-700 ease-in-out transform hover:scale-105">
                <a className="text-[#344563]" href="#project">
                  Portfolio
                </a>
              </li>
              <li className="px-3 py-4 transition delay-700 duration-700 ease-in-out transform hover:scale-105">
                <a className="text-[#344563]" href="#About">
                  About
                </a>
              </li>
              <li className="px-3 py-4 transition delay-700 duration-700 ease-in-out transform hover:scale-105">
                <a className="text-[#344563]" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button onClick={handleNav} className="md:hidden">
            <Image src={hamburger} alt="Hamburger button" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar