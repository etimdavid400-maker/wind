import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "../component/Button";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
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
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
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
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
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
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
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

            {status === "sent" && (
              <p className="text-green-600 text-center mt-4">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center mt-4">❌ Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </motion.section>

      {/* Contact Info Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-20 px-6 md:px-20 bg-gray-100"
      >
        <h2 className="text-3xl font-bold text-center mb-10">Our Office</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-gray-700 text-center">
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p>LUTH, Mushin, Lagos, Nigeria</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p>info@otan.org.ng</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p>+234 800 123 4567</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}












































// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import Button from "../component/Button";

// export default function Contact() {
//   const form = useRef();
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     const formData = new FormData(form.current);

//     // ✅ Connected to your real Formspree endpoint
//     const response = await fetch("https://formspree.io/f/mzzkdrjb", {
//       method: "POST",
//       body: formData,
//       headers: { Accept: "application/json" },
//     });

//     if (response.ok) {
//       setStatus("sent");
//       form.current.reset();
//     } else {
//       setStatus("error");
//     }
//   };

//   return (
//     <div className="w-full bg-gray-50 text-gray-800">
//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-gradient-to-r from-blue-700 via-green-500 to-teal-500 py-28 px-6 md:px-20 text-center text-white"
//       >
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact OTAN</h1>
//         <p className="text-lg md:text-xl max-w-2xl mx-auto">
//           We'd love to hear from you! Reach out for inquiries, collaborations, or membership support.
//         </p>
//       </motion.section>

//       {/* Contact Form Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="py-20 px-6 md:px-20"
//       >
//         <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
//         <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
//           <form ref={form} onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-gray-700 mb-2" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="Your Name"
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="you@example.com"
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-2" htmlFor="message">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 placeholder="Your message..."
//                 rows={6}
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>

//             <div className="text-center">
//               <Button variant="primary" type="submit" disabled={status === "sending"}>
//                 {status === "sending" ? "Sending..." : "Send Message"}
//               </Button>
//             </div>

//             {status === "sent" && (
//               <p className="text-green-600 text-center mt-4">
//                 ✅ Message sent successfully!
//               </p>
//             )}
//             {status === "error" && (
//               <p className="text-red-600 text-center mt-4">
//                 ❌ Something went wrong. Please try again.
//               </p>
//             )}
//           </form>
//         </div>
//       </motion.section>

//       {/* Contact Info Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         viewport={{ once: true }}
//         className="py-20 px-6 md:px-20 bg-gray-100"
//       >
//         <h2 className="text-3xl font-bold text-center mb-10">Our Office</h2>
//         <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-gray-700 text-center">
//           <div>
//             <h3 className="font-semibold mb-2">Address</h3>
//             <p>LUTH, Mushin, Lagos, Nigeria</p>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Email</h3>
//             <p>info@otan.org.ng</p>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Phone</h3>
//             <p>+234 800 123 4567</p>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// }
