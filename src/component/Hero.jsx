import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Occupational Therapist helping a patient"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Green Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A3B2E]/70 via-[#0A3B2E]/35 to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-5 pt-28 pb-16 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="w-full max-w-xl lg:max-w-3xl">
          {/* Small Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-[#C89D3D] font-semibold"
          >
            Occupational Therapy Association of Nigeria
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-bold leading-[1.05] text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl"
          >
            Helping Nigerians
            <br />
            Live More{" "}
            <span className="text-[#8ED081]">Independent</span> Lives.
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-base sm:text-lg lg:text-xl leading-7 lg:leading-8 text-gray-200"
          >
            OTAN represents occupational therapists across Nigeria,
            advancing education, advocacy, research, collaboration,
            and professional excellence to improve participation and
            quality of life for people of all ages.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/services"
              className="w-full sm:w-auto rounded-full bg-[#0E7A46] px-7 py-4 text-center font-semibold text-white shadow-xl transition-all duration-300 hover:bg-[#12693f] hover:shadow-2xl"
            >
              Become a Member
            </Link>

            <Link
              to="/about"
              className="w-full sm:w-auto rounded-full border border-white/50 px-7 py-4 text-center font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 md:block">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="flex h-12 w-7 justify-center rounded-full border-2 border-white"
        >
          <div className="mt-2 h-3 w-1 rounded-full bg-white"></div>
        </motion.div>
      </div>
    </section>
  );
}