"use client";
import { useSectionInView } from "@/lib/hooks";
import FormContact from "./FormContact";
import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";


function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
        <SectionHeading>Contact me</SectionHeading>
        <p className="text-gray-700 -mt-6 dark:text-white/80">
          If you have an application you are interested in developing, a feature
          that you need built or a project that needs coding. Please contact me
          directly at{" "}
          <a className="underline" href="mailto:atlassiilyass@gmail.com">
            atlassiilyass@gmail.com
          </a>{" "}
          or through this form. to help with it!
        </p>

        <FormContact />
    </motion.section>
  );
}

export default Contact;
