"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [placeholder, setPlaceholder] = useState("Your message...");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    if (!message) {
      setPlaceholder("Please enter a message");
      setIsSubmitting(false);
      return;
    }
    await fetch("/api/guestbook", {
      method: "POST",
      body: JSON.stringify({ message }),
    });
    setMessage("");
    setPlaceholder("Your message...");
    setIsSubmitting(false);
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${
        isSubmitting && `opacity-50`
      } relative mb-1 w-full text-neutral-100 transition-all`}
    >
      <input
        className="w-full rounded-md border border-neutral-800 bg-neutral-800 py-2 pl-4 pr-24 outline-none transition-all placeholder:text-neutral-400 focus:border-blue-800"
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        placeholder={placeholder}
        value={message}
        disabled={isSubmitting}
      />
      <button
        className={`${
          isSubmitting && `cursor-not-allowed`
        } absolute right-1 top-1 rounded bg-neutral-700 px-4 py-1 font-medium`}
        disabled={isSubmitting}
        type="submit"
      >
        Sign
      </button>
    </form>
  );
}
