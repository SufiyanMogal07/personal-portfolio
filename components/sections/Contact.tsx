"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? "";
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "";
  const PUBLIC_ID = process.env.NEXT_PUBLIC_EMAIL_KEY ?? "";

  const handleChange = (value: string, name: string) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form_data = {
      to_name: "Sufiyan Mogal",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form_data, PUBLIC_ID)
      .then(() => {
        alert("Message Sent!");
        setData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Something Went Wrong");
        console.error(error);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full h-auto md:py-14 pb-20"
    >
      <div className="w-full max-w-2xl pt-10">
        <h1 className="text-center text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 text-[15px] mb-8">
          Please contact me directly at{" "}
          <a
            className="underline underline-offset-4 decoration-2 decoration-blue-500 hover:text-blue-600"
            href="mailto:sufiyanyaseenmogal@gmail.com"
          >
            sufiyanyaseenmogal@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl shadow-md dark:shadow-gray-100/10 p-6 sm:p-8 flex flex-col gap-5"
        >
          <div>
            <label htmlFor="name" className="font-semibold block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={data.name}
              onChange={(e) => handleChange(e.target.value, "name")}
            />
          </div>

          <div>
            <label htmlFor="email" className="font-semibold block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={data.email}
              onChange={(e) => handleChange(e.target.value, "email")}
            />
          </div>

          <div>
            <label htmlFor="message" className="font-semibold block mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Hello! What's up?"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={data.message}
              onChange={(e) => handleChange(e.target.value, "message")}
            />
          </div>

          <button
            disabled={isSubmitting}
            className="bg-black/80 text-white hover:bg-black/70 dark:bg-white dark:text-black dark:hover:bg-white/80  disabled:bg-gray-500 font-semibold rounded-full py-2 px-6 transition-colors w-fit mx-auto"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};
