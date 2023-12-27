"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import MyImage from "../../../public/images/MyImage.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mb-28 max-w-5xl h-full lg:flex lg:flex-row-reverse text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center md:w-full ">
        <div className="relative ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={MyImage}
              alt="Ilyass Image"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className=" h-24 w-24  md:w-full sm:h-full rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 md:bottom-5 md:right-5 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
   <div>
       <motion.h1
         className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl md:text-start"
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
       >
         <span className="font-bold">Hello, I'm Ilyass.</span> I'm a{" "}
         <span className="font-bold">full-stack developer</span> with{" "}
         <span className="font-bold">2 years</span> of experience. I enjoy
         building <span className="italic">sites & apps</span>. My focus is{" "}
         <span className="underline">React (Next.js)</span>.
       </motion.h1>
       <motion.div
         className="flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:gap-4 gap-2 px-4 text-lg font-medium"
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
           delay: 0.1,
         }}
       >
         <Link
           href="#contact"
           className="group  whitespace-nowrap bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
           onClick={() => {
             setActiveSection("Contact");
             setTimeOfLastClick(Date.now());
           }}
         >
           Contact me here{" "}
           <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
         </Link>
    
         <a
           className="group whitespace-nowrap bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
           href="/CV.pdf"
           download
         >
           Download CV{" "}
           <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
         </a>
    
         <a
           className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
           href="https://linkedin.com"
           target="_blank"
         >
           <BsLinkedin />
         </a>
    
         <a
           className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
           href="www.linkedin.com/in/ilyassatlassi"
           target="_blank"
         >
           <FaGithubSquare />
         </a>
       </motion.div>
   </div>
    </section>
  );
};

export default Hero;
