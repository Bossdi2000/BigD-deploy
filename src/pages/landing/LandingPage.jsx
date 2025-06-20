import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import HeroSection from './HeroSection';

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 overflow-x-hidden"
    >
      {/* Navbar Component */}
      <Navbar />
      
      {/* Hero Section Component */}
      <HeroSection />
    </motion.div>
  );
};

export default LandingPage;