"use client"
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import Js from "../assets/ellipse-1.png";
import Html from "../assets/ellipse-2.png";
import CSS from "../assets/ellipse-3.png";
import Ruby from "../assets/ruby.png"
import ReactIcon from "../assets/science.png"
import Next from "../assets/next.png"
import Tailwind from "../assets/Tailwind.png"
import Git from "../assets/git.png"
import PostgreSQL from "../assets/postgresql.png"
import SQL from "../assets/SQL.png"
import Team from "../assets/team.png"
import Rails from "../assets/Rails.png"

const About = () => {
  const [Show, SetShow] = useState("language");

  const handleShow = (section: string) => {
    SetShow(section);
  };

  return (
    <section
      id="About"
      className="relative bg-[#CFD8DC] lg:h-[100dvh] min-h-[100dvh]"
    >
      <div className="bg-white py-28 px-7 flex flex-col lg:flex-row lg:rounded-tr-[124px] lg:px-36 lg:py-40 h-full ">
        <div className="flex flex-col gap-3 lg:w-1/2">
          <h2 className="text-4xl font-bold">About Myself</h2>
          <p>
            Hello I’m a software developer! I can help you build a product ,
            feature or website. Look through some of my work and experience! If
            you like what you see and have a project you need coded, don’t
            hesitate to contact me.
          </p>
          <h3 className="text-[#7F8CFF] font-medium ">LET&aposS CONNECT</h3>
          <ul className="flex gap-3 lg:pb-3  pt-1 pl-2">
            <li>
              <a href="https://github.com/ilyassatlassi">
                <FaGithub size={32} style={{ color: "#505F79" }} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ilyassatlassi/">
                <FaLinkedin size={32} style={{ color: "#505F79" }} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ilyass_atlassi">
                <FaTwitter size={32} style={{ color: "#505F79" }} />
              </a>
            </li>
            <li>
              <a href="mailto:atlassiilyass@gmail.com">
                <AiOutlineMail size={32} style={{ color: "#505F79" }} />
              </a>
            </li>
          </ul>
          <button className="w-1/2 lg:w-40 p-3 rounded-lg border-[#6070FF] border text-[#396DF2] font-medium hover:bg-[#6070FF] hover:text-[#FFFFFF] transition-all duration-1000 ease-out active:bg-[#2230D2] active:text-[#FFFFFF] disabled:text-[#5E6C84] disabled:border-[#C1C7D0] hover:scale-110 disabled:bg-[#ffffff] ">
            Get my resume
          </button>
        </div>
        <div className="lg:p-0  lg:w-1/2">
          <ul>
            <li  className="border-b-[#DFE1E6] border-b-2">
              <div onClick={() => Show === "language"? handleShow(""): handleShow("language")} className="w-full flex justify-between  py-6 lg:pt-0  pl-3 pr-[26px] cursor-pointer">
                <h3 className="text-xl font-medium">languages</h3>
                <svg
                  className={` ${
                    Show === "language" ? "cursor-pointer" : "hidden"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                    fill="#5E6C84"
                  />
                </svg>
                <svg
                  className={` ${
                    Show === "language" ? "hidden" : "cursor-pointer"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.29289 5.43962C9.68342 5.0491 10.3166 5.0491 10.7071 5.43962L16.7071 11.4396C17.0976 11.8301 17.0976 12.4633 16.7071 12.8538L10.7071 18.8538C10.3166 19.2444 9.68342 19.2444 9.29289 18.8538C8.90237 18.4633 8.90237 17.8301 9.29289 17.4396L14.5858 12.1467L9.29289 6.85384C8.90237 6.46331 8.90237 5.83015 9.29289 5.43962Z"
                    fill="#505F79"
                  />
                </svg>
              </div>
              <ul
                className={` ${
                  Show === "language"
                    ? "flex flex-col lg:flex-row p-3 gap-3"
                    : "hidden"
                }`}
              >
                <li className="flex lg:flex-col lg:items-start lg:w-32 py-2 px-3 gap-4 content-center rounded-lg items-center bg-[#F7F7F9]">
                  <Image className="w-12 h-12" src={Js} alt="javascript" />
                  <h4 className="font-medium">JavaScript</h4>
                </li>
                <li className="flex lg:flex-col lg:items-start lg:w-32 py-2 px-3 gap-4 content-center rounded-lg items-center bg-[#F7F7F9]">
                  <Image className="w-12 h-12" src={Html} alt="html" />
                  <h4 className="font-medium">HTML</h4>
                </li>
                <li className="flex lg:flex-col lg:items-start lg:w-32 py-2 px-3 gap-4 content-center rounded-lg items-center bg-[#F7F7F9]">
                  <Image className="w-12 h-12" src={CSS} alt="CSS" />
                  <h4 className="font-medium">CSS</h4>
                </li>
                <li className="flex lg:flex-col lg:items-start lg:w-32 py-2 px-3 gap-4 content-center rounded-lg items-center bg-[#F7F7F9]">
                  <Image className="w-12 h-12" src={Ruby} alt="Ruby" />
                  <h4 className="font-medium">Ruby</h4>
                </li>
              </ul>
            </li>
            <li className="border-b-[#DFE1E6] border-b-2">
              <div  onClick={() => Show === "framework"? handleShow(""): handleShow("framework")} className="cursor-pointer w-full flex justify-between  py-6  pl-3 pr-[26px]">
                <h3 className="text-xl font-medium">Frameworks</h3>
                <svg
                  className={` ${
                    Show === "framework" ? "hidden" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.29289 5.43962C9.68342 5.0491 10.3166 5.0491 10.7071 5.43962L16.7071 11.4396C17.0976 11.8301 17.0976 12.4633 16.7071 12.8538L10.7071 18.8538C10.3166 19.2444 9.68342 19.2444 9.29289 18.8538C8.90237 18.4633 8.90237 17.8301 9.29289 17.4396L14.5858 12.1467L9.29289 6.85384C8.90237 6.46331 8.90237 5.83015 9.29289 5.43962Z"
                    fill="#505F79"
                  />
                </svg>
                <svg
                  className={` ${
                    Show === "framework" ? "" : "hidden"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                    fill="#5E6C84"
                  />
                </svg>
              </div>
              <ul
                className={` ${
                  Show === "framework"
                    ? "flex flex-col lg:flex-row p-3 gap-3"
                    : "hidden"
                }`}
              >
                <li className="flex lg:flex-col lg:items-start lg:w-32 py-2 px-3 gap-4 content-center rounded-lg items-center bg-[#F7F7F9]">
                  <Image className="h-12 w-12" src={Rails} alt="Rails" />
                  <h4 className="font-medium">Rails</h4>
                </li>
                <li className="flex lg:flex-col lg:items-start lg:w-32 py-2 px-3 gap-4 content-center rounded-lg items-center bg-[#F7F7F9]">
                  <Image className="w-12 h-12" src={ReactIcon} alt="React" />
                  <h4 className="font-medium">React</h4>
                </li>
                <li className="flex lg:flex-col lg:items-start lg:w-32 py-2 px-3 gap-4 content-center rounded-lg items-center bg-[#F7F7F9]">
                  <Image className="w-12 h-12" src={Next} alt="Next" />
                  <h4 className="font-medium">Next.js</h4>
                </li>
                <li className="flex lg:flex-col lg:items-start lg:w-32 py-2 px-3 gap-4 content-center rounded-lg items-center bg-[#F7F7F9]">
                  <Image className="w-12 h-12" src={Tailwind} alt="Tailwind" />
                  <h4 className="font-medium">Tailwind</h4>
                </li>
              </ul>
            </li>
            <li className="border-b-[#DFE1E6] border-b-2">
              <div  onClick={() => Show === "skills"? handleShow(""): handleShow("skills")} className="cursor-pointer w-full flex justify-between  py-6  pl-3 pr-[26px]">
                <h3 className="text-xl font-medium">Skills</h3>
                <svg
                  className={` ${
                    Show === "skills" ? "hidden" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.29289 5.43962C9.68342 5.0491 10.3166 5.0491 10.7071 5.43962L16.7071 11.4396C17.0976 11.8301 17.0976 12.4633 16.7071 12.8538L10.7071 18.8538C10.3166 19.2444 9.68342 19.2444 9.29289 18.8538C8.90237 18.4633 8.90237 17.8301 9.29289 17.4396L14.5858 12.1467L9.29289 6.85384C8.90237 6.46331 8.90237 5.83015 9.29289 5.43962Z"
                    fill="#505F79"
                  />
                </svg>
                <svg
                  className={` ${
                    Show === "skills" ? "" : "hidden"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                    fill="#5E6C84"
                  />
                </svg>
              </div>
              <ul
                className={` ${
                  Show === "skills"
                    ? "flex flex-col lg:flex-row p-3 gap-3"
                    : "hidden"
                }`}
              >
                <li className="flex lg:flex-col lg:items-start lg:w-32 py-2 px-3 gap-4 content-center rounded-lg items-center bg-[#F7F7F9]">
                  <Image className="w-12 h-12" src={Git} alt="Git" />
                  <h4 className="font-medium">Git</h4>
                </li>
                <li className="flex lg:flex-col lg:items-start lg:w-32 py-2 px-3 gap-4 content-center rounded-lg items-center bg-[#F7F7F9]">
                  <Image className="w-12 h-12" src={PostgreSQL} alt="PostgreSQL" />
                  <h4 className="font-medium">PostgreSQL</h4>
                </li>
                 <li className="flex lg:flex-col lg:items-start lg:w-32 py-2 px-3 gap-4 content-center rounded-lg items-center bg-[#F7F7F9]">
                  <Image className="w-12 h-12" src={SQL} alt="SQL" />
                  <h4 className="font-medium">SQL</h4>
                </li>
                <li className="flex lg:flex-col lg:items-start lg:w-32 py-2 px-3 gap-4 content-center rounded-lg items-center bg-[#F7F7F9]">
                  <Image className="w-12 h-12" src={Team} alt="Team" />
                  <h4 className="font-medium">Team Work</h4>
                </li>
               
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
