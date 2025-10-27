import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Card({ head, message, btn, img, fullText }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 180, damping: 12 }}
        className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden flex flex-col transition-all duration-300"
      >
        {/* Image */}
        <div className="relative w-full h-56 overflow-hidden flex justify-center items-center bg-gray-100">
          <motion.img
            src={img || "https://via.placeholder.com/400x250"}
            alt={head}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="object-cover object-center w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{head}</h3>
          <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{message}</p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#4b5563" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="mt-auto bg-gray-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors duration-200"
          >
            {btn}
          </motion.button>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative overflow-y-auto max-h-[80vh]"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{head}</h2>
              <p className="text-gray-600 leading-relaxed">
                {fullText || message}
              </p>

              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
