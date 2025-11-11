"use client";

import { FormEvent, useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? "";
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "";
  const PUBLIC_ID = process.env.NEXT_PUBLIC_EMAIL_KEY ?? "";

  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleChange = (value: string, name: string) => {
    console.log(name, value);
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    setIsSubmiting(true);

    e.preventDefault();

    const time = new Date().toLocaleString();

    const form_data = {
      to_name: "Sufiyan Mogal",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
      time,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form_data, PUBLIC_ID)
      .then(() => {
        handleClear();
        alert("Message Sent!");
      })
      .catch((error) => {
        alert("Something Went Wrong");
        console.error(error);
      })
      .finally(() => {
        setIsSubmiting(false);
      });
  };

  const handleClear = () => {
    setData((prev) => {
      return {
        ...prev,
        name: "",
        email: "",
        message: "",
      };
    });
  };

  return (
    <div id="contact" className="h-screen max-w-2xl mx-auto bg-gren-300 pt-24">
      <h1 className="text-center text-4xl font-bold my-4">Get In Touch</h1>
      <h5 className="font-semibold text-center text-[15px] text-gray-500 dark:text-gray-300">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:sufiyanmogal04@gmail.com">
          sufiyanmogal04@gmail.com
        </a>{" "}
        or through these form
      </h5>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="mx-auto mt-10 space-y-6 flex flex-col"
      >
        <div className="flex flex-col gap-y-2">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            className="border placeholder:text-gray-300 py-2 px-4 rounded border-gray-100/30"
            required
            value={data.name}
            onChange={(e) => {
              handleChange(e.target.value, "name");
            }}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className="border placeholder:text-gray-300 py-2 px-4 rounded border-gray-100/30"
            required
            value={data.email}
            onChange={(e) => {
              handleChange(e.target.value, "email");
            }}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="message" className="font-bold">
            Message
          </label>
          <textarea
            rows={6}
            placeholder="Hello! Whatsup ?"
            className="border py-2 px-4 resize-none border-gray-400 dark:border-gray-100/30"
            required
            value={data.message}
            onChange={(e) => {
              handleChange(e.target.value, "message");
            }}
          />
        </div>
        <button className="border justify-center inline-block self-center px-5 py-1 rounded-full text-sm bg-white text-black">
          {isSubmiting ? "Submiting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
