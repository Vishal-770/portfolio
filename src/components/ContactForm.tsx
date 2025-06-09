"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useUser, useClerk } from "@clerk/nextjs";
import { SendMessage } from "@/services/service";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactForm() {
  const { user, isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (!isSignedIn) {
      openSignIn();
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Message submitted by:", user?.fullName || user?.username);
      console.log(data.name, data.message, user.emailAddresses[0].emailAddress);
      await SendMessage({
        name: data.name,
        message: data.message,
        email: user.emailAddresses[0].emailAddress,
      });

      reset();
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md rounded-lg border border-gray-800 bg-black p-8 shadow-lg shadow-gray-900/50"
    >
      <h2 className="mb-8 text-center text-3xl font-bold text-white">
        Talk To Me
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            {...register("name")}
            className={`w-full rounded-md bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-500 focus:ring-red-500/30"
                : "border-gray-700 focus:border-white focus:ring-white/30"
            }`}
          />
          {errors.name && (
            <p className="text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your message here..."
            rows={5}
            {...register("message")}
            className={`w-full rounded-md bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${
              errors.message
                ? "border-red-500 focus:ring-red-500/30"
                : "border-gray-700 focus:border-white focus:ring-white/30"
            }`}
          />
          {errors.message && (
            <p className="text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full rounded-md px-6 py-3 font-medium transition-all ${
              isSubmitting
                ? "bg-gray-800 text-gray-400 cursor-not-allowed"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                SENDING...
              </span>
            ) : (
              "SEND MESSAGE"
            )}
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
}
