"use client";

import { formSubmission } from "@/actions/SubmitForm";
import toast from "react-hot-toast";
import { FormSchema } from "../../lib/typesForm";
import { useRef } from "react";
import SubmitBtn from "./Submit-btn";
const FormContact = () => {
  const ref = useRef<HTMLFormElement>(null);
  const clientAction = async (formData: FormData) => {
    const newContact = {
      email: formData.get("email"),
      message: formData.get("message"),
    };
    // client validitaion
    const result = FormSchema.safeParse(newContact);
    if (!result.success) {
      let errorMessage = "";

      result.error.issues.forEach((issue) => {
        errorMessage = issue.message + ".";
      });
      toast.error(errorMessage);
      return;
    }
    const response = await formSubmission(result.data);
    if (response?.error) {
      toast.error(response.error);
      return;
    }
    toast.success("Successfully sent!");
    // reset
    ref.current?.reset();
  };

  return (
    <form
      ref={ref}
      action={clientAction}
      className="mt-10 flex flex-col dark:text-black"
    >
      <input
        name="email"
        type="email"
        className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        placeholder="Your email "
        required
      />

      <textarea
        className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        name="message"
        placeholder="Your message"
        required
        maxLength={5000}
      />
        <SubmitBtn/>
    </form>
  );
};

export default FormContact;
