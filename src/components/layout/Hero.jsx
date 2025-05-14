import React from "react";
import { Link } from "react-router-dom";
import { Plane, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-[600px] bg-gradient-to-b from-white via-blue-50 to-blue-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight"
        >
          <span className="text-[#f50b0b]">Plan your perfect trip</span>
          <br />
          with AI-Powered Travel Assistant
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Create detailed itineraries, share with friends, and make memories
          that last a lifetime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <Link to="/create-trip">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-[#f50b0b] hover:bg-[#e00a0a] text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-all flex items-center gap-2"
            >
              <Plane className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
