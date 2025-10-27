import React, { useState } from "react";
import { motion } from "framer-motion";
import Precious from "../assets/precious.jpg";
import Button from "../component/Button";
import otData from "../data/otData.json";

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
    <div className="w-full bg-gray-50 text-gray-800">
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

      {/* Registration Form */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 px-6 md:px-20 bg-gray-100"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Register as an Occupational Therapist
        </h2>
        <form
          onSubmit={handleRegister}
          className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-6 md:p-10 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-gray-600"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="degree"
              placeholder="Degree / Qualification"
              value={formData.degree}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="text"
              name="workplace"
              placeholder="Place of Work"
              value={formData.workplace}
              onChange={handleChange}
              className="border border-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <input
              type="file"
              accept="image/*"
              className="border border-gray-400 rounded-lg p-3 w-full md:w-2/3 text-gray-600"
            />
            <Button type="submit" variant="dark" className="w-full md:w-auto">
              Submit Registration
            </Button>
          </div>
        </form>

        {/* Success message */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg text-sm md:text-base"
          >
            ✅ Registration submitted successfully!
          </motion.div>
        )}
      </motion.section>
    </div>
  );
}
