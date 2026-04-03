import React, { useState } from "react";
import { motion } from "framer-motion";
import Precious from "../assets/precious.jpg";
import Button from "../component/Button";
import otData from "../data/otData.json";
import { Helmet } from "react-helmet-async";


export default function Services() {
  const [otId, setOtId] = useState("");
  const [profile, setProfile] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    degree: "",
    workplace: "",
  });

  const handleVerify = () => {
    const found = otData.find(
      (item) => item.id.toUpperCase() === otId.trim().toUpperCase()
    );
    setProfile(found || "not-found");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.degree || !formData.workplace) {
      alert("Please fill all required fields.");
      return;
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({ name: "", email: "", degree: "", workplace: "" });
  };

  return (
    <div className="w-full pt-10 bg-gray-50 text-gray-800">
        <Helmet>
        <title>OTAN Services — Occupational Therapy Association of Nigeria</title>
        <meta
          name="description"
          content="Explore the services offered by the Occupational Therapy Association of Nigeria (OTAN), including therapist resources, training, and support."
        />
      </Helmet>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-gray-800 to-gray-600 py-24 px-6 md:px-20 text-center text-white"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          OT Registration & Verification
        </h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto">
          Verify registered Occupational Therapists or register to become a recognized OT professional in Nigeria.
        </p>
      </motion.section>

      {/* Verification Section */}
      <section className="py-16 px-4 sm:px-8 md:px-20 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Verify an OT</h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          {/* Enter the OT ID (e.g., <strong>OTN-001</strong>) to confirm registration and view credentials. */}
          Enter the OT ID to confirm registration and view credentials.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Enter OT ID"
            value={otId}
            onChange={(e) => setOtId(e.target.value)}
            className="border border-gray-400 rounded-lg p-3 w-full sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-gray-600 text-center sm:text-left"
          />
          <Button variant="dark" onClick={handleVerify} className="w-full sm:w-auto">
            Verify
          </Button>
        </div>

        {/* Display result */}
        <div className="mt-10">
          {profile === "not-found" && (
            <p className="text-red-500 font-semibold text-sm md:text-base">
              No record found for that OT ID.
            </p>
          )}

          {profile && profile !== "not-found" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 shadow-md rounded-2xl p-6 sm:p-10 max-w-lg mx-auto mt-6 text-left"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={Precious}
                  alt={profile.name}
                  className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover mb-4 border-4 border-gray-300"
                />
                <h3 className="text-xl md:text-2xl font-semibold mb-1">{profile.name}</h3>
                <p className="text-gray-700 text-sm md:text-base mb-1">{profile.degree}</p>
                <p className="text-gray-700 text-sm md:text-base mb-1">📍 {profile.workplace}</p>
                <p className="text-gray-600 text-sm md:text-base">{profile.email}</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

        {/* Registration Steps */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-6 md:px-20 bg-gray-100"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          How to Register as an Occupational Therapist
        </h2>

        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 md:p-10 space-y-4 text-gray-700">
          <p>To register as a recognized Occupational Therapist, please follow the steps below:</p>

          <ol className="list-decimal ml-5 space-y-3">
            <li>Go to the Contact Page.</li>
            <li>Send a message requesting to be registered as an Occupational Therapist.</li>
            <li>Include your Full Name, Qualification, Place of Work, and Email Address.</li>
            <li>Include an active phone number so we can contact you.</li>
            <li>Our team will review your request and contact you for verification.</li>
          </ol>

          <div className="text-center mt-6">
            <a href="/contact">
              <Button variant="dark">Go to Contact Page</Button>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
