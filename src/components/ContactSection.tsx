"use client";

import { ContactForm } from "./ContactForm";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export function ContactSection() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="h-6 w-6" />,
      url: "https://github.com/Vishal-770",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="h-6 w-6" />,
      url: "https://www.linkedin.com/in/vishal-prabhu-130b1a323",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="h-6 w-6" />,
      url: "https://x.com/Vishal_7707",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="h-6 w-6" />,
      url: "mailto:vishalpeace07@email.com",
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center"
        >
          Contact ME
        </motion.h1>
      </div>

      {/* Mobile/Tablet View (stacked) */}
      <div className="lg:hidden space-y-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-2xl font-semibold mb-6">Find Me On</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 p-3 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors"
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <ContactForm />
        </motion.div>
      </div>

      {/* Desktop View (side by side) */}
      <div className="hidden lg:flex justify-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-1/3 max-w-md"
        >
          <h2 className="text-2xl font-semibold mb-8">Get In Touch</h2>
          <div className="space-y-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                <span className="text-2xl">{link.icon}</span>
                <div>
                  <p className="font-medium">{link.name}</p>
                  <p className="text-sm text-gray-400">
                    {link.url.replace("mailto:", "").replace("https://", "")}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 max-w-lg"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
