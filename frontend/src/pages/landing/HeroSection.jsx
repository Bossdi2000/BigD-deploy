"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Sparkles, RefreshCw, Maximize2 } from 'lucide-react'

const HeroSection = () => {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false)

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const handleSignItClick = () => {
    navigate("/sign-introduction")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#010B13",
        position: "relative",
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: isMobile ? "70px" : "60px", // Account for navbar height
      }}
    >
      {/* Background Effects */}
      <div style={{ position: "absolute", inset: 0 }}>
        <div
          style={{
            position: "absolute",
            top: isMobile ? "60px" : "80px",
            left: isMobile ? "20px" : "40px",
            width: isMobile ? "200px" : "300px",
            height: isMobile ? "200px" : "300px",
            background: "rgba(168, 85, 247, 0.2)",
            borderRadius: "50%",
            filter: "blur(60px)",
            animation: "pulse 3s infinite",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: isMobile ? "60px" : "80px",
            right: isMobile ? "20px" : "40px",
            width: isMobile ? "250px" : "400px",
            height: isMobile ? "250px" : "400px",
            background: "rgba(236, 72, 153, 0.2)",
            borderRadius: "50%",
            filter: "blur(60px)",
            animation: "pulse 3s infinite 1s",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "400px" : "600px",
            height: isMobile ? "400px" : "600px",
            background: "rgba(59, 130, 246, 0.1)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        ></div>
      </div>

      {/* Floating Icons - Hide on mobile for cleaner look */}
      {!isMobile && (
        <>
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: "140px",
              left: "80px",
              color: "rgba(255, 255, 255, 0.3)",
              zIndex: 1,
            }}
          >
            <RefreshCw size={24} />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            style={{
              position: "absolute",
              top: "180px",
              right: "120px",
              color: "rgba(255, 255, 255, 0.3)",
              zIndex: 1,
            }}
          >
            <Sparkles size={20} />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            style={{
              position: "absolute",
              bottom: "200px",
              right: "80px",
              color: "rgba(255, 255, 255, 0.3)",
              zIndex: 1,
            }}
          >
            <Maximize2 size={22} />
          </motion.div>
        </>
      )}

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: isMobile ? "100%" : "1200px",
          width: "100%",
          padding: isMobile ? "2rem 1rem" : "clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 4rem)",
          textAlign: "center",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "20px" : "24px",
            alignItems: "center",
          }}
        >
          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: isMobile ? "2rem" : "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: "700",
              color: "white",
              lineHeight: isMobile ? "1.3" : "1.2",
              margin: 0,
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: isMobile ? "8px" : "12px",
              letterSpacing: "-0.02em",
              fontFamily: "'Playfair Display', serif",
              textAlign: "center",
            }}
          >
            <span>Orange Dynasty</span>
            <span
              style={{
                color: "#FFA500",
                fontWeight: "500",
                fontStyle: "italic",
                fontFamily: "'Playfair Display', serif",
                fontSize: isMobile ? "1.5rem" : "inherit",
              }}
            >
              A collection of cherished moments
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: isMobile ? "1rem" : "clamp(1rem, 2.5vw, 1.25rem)",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: isMobile ? "100%" : "700px",
              margin: "0 auto",
              lineHeight: isMobile ? "1.6" : "1.8",
              fontFamily: "'Inter', sans-serif",
              fontWeight: "400",
              padding: isMobile ? "0 10px" : "0",
            }}
          >
            Just like every family keeps an album close to heart, this is ours. A home for every smile, every dream, and
            every soul that's walked this journey. You're not just seen, you're remembered, valued, and forever part of
            us.
          </motion.p>

          {/* Generate Button */}
          <motion.div
            variants={itemVariants}
            style={{
              paddingTop: isMobile ? "16px" : "24px",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <motion.button
              onClick={handleSignItClick}
              whileHover={{
                scale: isMobile ? 1.02 : 1.05,
                boxShadow: "0 20px 40px rgba(165, 84, 42, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "relative",
                padding: isMobile ? "16px 32px" : "14px 28px",
                background: "#A0522D",
                borderRadius: "50px",
                color: "white",
                fontWeight: "600",
                fontSize: isMobile ? "1.1rem" : "clamp(1rem, 2vw, 1.125rem)",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(165, 84, 42, 0.4)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                margin: "0 auto",
                fontFamily: "'Inter', sans-serif",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? "280px" : "none",
                justifyContent: "center",
              }}
            >
              <span>Be Seen</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={isMobile ? 20 : 18} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        @media (max-width: 768px) {
          body {
            overflow-x: hidden;
          }
        }
      `}</style>
    </div>
  )
}

export default HeroSection
