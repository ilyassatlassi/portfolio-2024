"use server";
import React from "react";
import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import { FormSchema } from "../../lib/typesForm";
import { Resend } from "resend";
import { string, unknown } from "zod";
import ContactFormEmail from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (error === "string") {
    message = error 
  }else{
    message = "Somthing went wrong!"
  }
  return message;
};

export const formSubmission = async (newContact: unknown) => {
  // server side validation
  const result = FormSchema.safeParse(newContact);

  if (!result.success) {
    let errorMessage = "";
    result.error.issues.map((issue) => {
      errorMessage = issue.message + ".";
    });
    return {
      error: errorMessage,
    };
  }
  const message = result.data.message
  const senderEmail = result.data.email

  try {
    await resend.emails.send({
      from: 'Contact From <onboarding@resend.dev>',
      to: 'atlassiilyass@gmail.com',
      subject: "New Message from a Contact",
      text: message,
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string
      }),
    });
  } catch (error) {
    console.log(getErrorMessage(error))
    return {
      error: getErrorMessage(error)
    };
  }
  //  await resend.emails.send({
  //     from: 'Contact From <onboarding@resend.dev>',
  //     to: senderEmail,  // Use the user's email address
  //     subject: 'Contact Form Submission Confirmation',
  //     text: 'Thank you for contacting us. We have received your message.',
  //   });
  // await prisma.contact.create({
  //   data: {
  //     name: result.data.name,
  //     email: result.data.email,
  //     message: result.data.message,
  //   },
  // });
};
