import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "../component/Button";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("sent");
        form.current.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-700 via-green-500 to-teal-500 py-28 px-6 md:px-20 text-center text-white"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact OTAN</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We'd love to hear from you! Reach out for inquiries, collaborations, or membership support.
        </p>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-20"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message..."
                rows={6}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="text-center">
              <Button variant="primary" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
            </div>

            {status === "sent" && <p className="text-green-600 text-center mt-4">✅ Message sent successfully!</p>}
            {status === "error" && <p className="text-red-600 text-center mt-4">❌ Something went wrong. Please try again.</p>}
          </form>
        </div>
      </motion.section>
    </div>
  );
}
