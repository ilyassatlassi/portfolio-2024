"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { BsArrowRight } from "react-icons/bs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 px-5 flex flex-col max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] gap-4 flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <ProjectDetails
            description={description}
            title={title}
            tags={tags}
            imageUrl={imageUrl}
          />
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="sm:absolute sm:top-8 sm:-right-40 sm:w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}

export const ProjectDetails = ({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className="group whitespace-nowrap bg-gray-900
         text-white  py-3 flex items-center gap-2 rounded-full 
         outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 
         active:scale-105 transition w-1/2 "
        >
          See Details
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Button>
      </DrawerTrigger>
      <DrawerContent >
      <div className="flex sm:flex-rox max-w-5xl mx-auto p-4 gap-4">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] gap-4 flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
            <Carousel className="w-full">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        
          <div className="flex flex-col gap-4 items-center justify-center w-full">
          <Button
          className="group whitespace-nowrap bg-gray-900
         text-white  py-3 flex items-center gap-2 rounded-full 
         outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 
         active:scale-105 transition w-1/2 "
        >
          See Demo
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Button>
        <Button
          className="group whitespace-nowrap bg-gray-900
         text-white  py-3 flex items-center gap-2 rounded-full 
         outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 
         active:scale-105 transition w-1/2 "
        >
          See Demo
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Button>
            
          </div>
      </div>
      </DrawerContent>
    </Drawer>
  );
};
