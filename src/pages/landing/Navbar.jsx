"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Menu, X } from 'lucide-react'
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: isMobile ? "70px" : "60px",
          zIndex: 50,
          background: "linear-gradient(90deg, #8B4513, #A0522D, #CD853F)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "100%",
            padding: isMobile ? "0 16px" : "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
            style={{ cursor: "pointer" }}
          >
            <h1
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: isMobile ? "16px" : "20px",
                letterSpacing: "1px",
                margin: 0,
              }}
            >
              SIGN BROCHURE
            </h1>
          </motion.div>

          {/* Desktop Navigation Links */}
          {!isMobile && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              {["Home", "About"].map((item, index) =>
                item === "About" ? (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      padding: "8px 24px",
                      borderRadius: "20px",
                      fontSize: "16px",
                      fontWeight: "500",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      backgroundColor: "transparent",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)"
                      e.target.style.color = "white"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent"
                      e.target.style.color = "rgba(255, 255, 255, 0.7)"
                    }}
                  >
                    <Link
                      to="/about"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      padding: "8px 24px",
                      borderRadius: "20px",
                      fontSize: "16px",
                      fontWeight: "500",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      backgroundColor: item === "Home" ? "rgba(255, 255, 255, 0.1)" : "transparent",
                      color: item === "Home" ? "white" : "rgba(255, 255, 255, 0.7)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "rgba(255, 255, 255, 0.15)"
                      e.target.style.color = "white"
                    }}
                    onMouseLeave={(e) => {
                      if (item !== "Home") {
                        e.target.style.backgroundColor = "transparent"
                        e.target.style.color = "rgba(255, 255, 255, 0.7)"
                      }
                    }}
                  >
                    <Link
                      to="/"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ),
              )}
            </div>
          )}

          {/* Right side - Join Us Button (Desktop) / Menu Button (Mobile) */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {!isMobile ? (
              <motion.a
                href="https://x.com/sign"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 24px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "20px",
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "500",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "white"
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.3)"
                  e.target.style.backgroundColor = "transparent"
                }}
              >
                <User size={18} />
                <span>Join Us</span>
              </motion.a>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMobileMenu}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  border: "1px solid white",
                  borderRadius: "8px",
                  backgroundColor: "#FF8C00", // Orange background
                  color: "white",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#FF7F00"
                  e.target.style.transform = "scale(1.05)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#FF8C00"
                  e.target.style.transform = "scale(1)"
                }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: "70px",
              left: 0,
              width: "100vw",
              height: "calc(100vh - 70px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 40,
              backdropFilter: "blur(5px)",
            }}
            onClick={closeMobileMenu}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "0 0 20px 20px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Navigation Links */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                {["Home", "About"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      padding: "12px 16px",
                      borderRadius: "12px",
                      backgroundColor: item === "Home" ? "rgba(139, 69, 19, 0.1)" : "transparent",
                      border: "1px solid rgba(139, 69, 19, 0.2)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onClick={closeMobileMenu}
                  >
                    <Link
                      to={item === "Home" ? "/" : "/about"}
                      style={{
                        textDecoration: "none",
                        color: "#8B4513",
                        fontSize: "18px",
                        fontWeight: "500",
                        display: "block",
                        width: "100%",
                      }}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Join Us Button */}
              <motion.a
                href="https://x.com/sign"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  border: "1px solid #8B4513",
                  borderRadius: "12px",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "500",
                  backgroundColor: "#8B4513",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
                onClick={closeMobileMenu}
              >
                <User size={20} />
                <span>Join Us</span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
