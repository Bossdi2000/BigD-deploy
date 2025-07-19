"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Zap, ArrowRight } from "lucide-react"

const TeamPage = () => {
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

  const handleNext = () => {
    navigate("/gallery")
  }

  const teamMembers = [
    {
      name: "Megan W",
      role: "Sign Intern",
      description:
        "Megan W is the intern for the @sign account, recognized for her vibrant, warm, and energetic online presence.",
      details: [
        "Actively supports user engagement and creative initiatives.",
        "Assists with tattoo reimbursement efforts to celebrate community loyalty.",
        'Joined the May 30, 2025 "tea party" discussion, adding energy and relatability.',
      ],
      image: "SIGN10.jpeg",
      color: "#FF8C00",
    },
    {
      name: "Zoe Chen",
      role: "Community Moderator",
      description:
        "Zoe Chen is the community moderator for the @sign account, supporting Sign's mission to simplify decentralized agreements.",
      details: [
        "Coordinates user interactions and manages direct messages.",
        "Helps organize community-driven events highlighting Sign's core products.",
        'Contributed to the May 30, 2025 "tea party" discussion about the Sign Super App.',
      ],
      image: "SIGN11.jpeg",
      color: "#3B82F6",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: isMobile ? {} : { scale: 1.03, boxShadow: "0 12px 36px rgba(0, 0, 0, 0.3)", transition: { duration: 0.3 } },
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#010B13",
        position: "relative",
        padding: isMobile ? "80px 0 40px 0" : "60px 0", // Account for navbar on mobile
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Load Playfair Display font */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />

      {/* Background Effects */}
      <div style={{ position: "absolute", inset: 0 }}>
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: isMobile ? "5%" : "10%",
            width: isMobile ? "200px" : "300px",
            height: isMobile ? "200px" : "300px",
            background: "rgba(255, 140, 0, 0.12)",
            borderRadius: "50%",
            filter: "blur(60px)",
            animation: "pulse 4s infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            right: isMobile ? "5%" : "10%",
            width: isMobile ? "180px" : "250px",
            height: isMobile ? "180px" : "250px",
            background: "rgba(168, 85, 247, 0.12)",
            borderRadius: "50%",
            filter: "blur(50px)",
            animation: "pulse 4s infinite 2s",
          }}
        />
      </div>

      {/* Floating Icons - Hide on mobile */}
      {!isMobile && (
        <>
          <div
            style={{
              position: "absolute",
              top: "100px",
              left: "80px",
              color: "rgba(255, 140, 0, 0.3)",
              zIndex: 1,
              animation: "float 4s infinite ease-in-out",
            }}
          >
            <Shield size={24} />
          </div>
          <div
            style={{
              position: "absolute",
              top: "150px",
              right: "100px",
              color: "rgba(168, 85, 247, 0.3)",
              zIndex: 1,
              animation: "float 3s infinite ease-in-out 1s",
            }}
          >
            <Zap size={22} />
          </div>
        </>
      )}

      {/* Main Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          width: "100%",
          padding: isMobile ? "0 16px" : "0 1.5rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "30px" : "40px" }}>
          {/* Header Section */}
          <div style={{ textAlign: "center", marginBottom: isMobile ? "20px" : "40px" }}>
            <h1
              style={{
                fontSize: isMobile ? "2rem" : "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: "bold",
                color: "white",
                margin: "0 0 8px 0",
                lineHeight: 1.1,
              }}
            >
              Meet the Team
            </h1>
            <h2
              style={{
                fontSize: isMobile ? "1.5rem" : "clamp(1.8rem, 3vw, 2rem)",
                fontWeight: "bold",
                color: "#FF8C00",
                fontFamily: "'Playfair Display', serif",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Sign's Community Champions
            </h2>
          </div>

          {/* Team Section */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 140, 0, 0.3)",
              borderRadius: "20px",
              padding: isMobile ? "20px" : "40px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h2
              style={{
                fontSize: isMobile ? "1.4rem" : "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: "bold",
                color: "white",
                marginBottom: isMobile ? "24px" : "40px",
                textAlign: "center",
                textShadow: "0 2px 8px rgba(255, 140, 0, 0.3)",
              }}
            >
              Our Community Leaders
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(320px, 1fr))",
                justifyContent: "center",
                gap: isMobile ? "20px" : "32px",
                width: "100%",
              }}
            >
              <AnimatePresence>
                {teamMembers.map((member) => (
                  <motion.div
                    key={member.name}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    exit="hidden"
                    layout
                  >
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.06)",
                        border: `1px solid ${member.color}40`,
                        borderRadius: "16px",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                        position: "relative",
                        overflow: "hidden",
                        height: "auto",
                        maxWidth: isMobile ? "100%" : "400px",
                        margin: isMobile ? "0 auto" : "0",
                      }}
                    >
                      {/* Decorative Background */}
                      <div
                        style={{
                          position: "absolute",
                          top: "-30%",
                          right: "-30%",
                          width: isMobile ? "120px" : "180px",
                          height: isMobile ? "120px" : "180px",
                          background: `${member.color}15`,
                          borderRadius: "50%",
                          filter: "blur(40px)",
                        }}
                      />

                      {/* Member Image */}
                      <div style={{ position: "relative", height: isMobile ? "280px" : "250px" }}>
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={`${member.name} Portrait`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: isMobile ? "contain" : "cover",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            backgroundColor: isMobile ? "rgba(255, 255, 255, 0.02)" : "transparent",
                          }}
                          onError={(e) => {
                            e.target.style.display = "none"
                            e.target.nextSibling.style.display = "flex"
                          }}
                        />
                        <div
                          style={{
                            display: "none",
                            height: isMobile ? "280px" : "250px",
                            background: "rgba(255, 255, 255, 0.05)",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontSize: "16px",
                            textAlign: "center",
                            padding: "12px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                          }}
                        >
                          <div style={{ textAlign: "center" }}>Team Member Portrait</div>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div style={{ padding: isMobile ? "16px" : "24px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginBottom: "16px",
                          }}
                        >
                          <div
                            style={{
                              padding: isMobile ? "6px" : "8px",
                              background: "rgba(255, 140, 0, 0.2)",
                              borderRadius: "50%",
                              color: "#FF8C00",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: "0 4px 12px rgba(255, 140, 0, 0.15)",
                              animation: "pulse-icon 1.5s infinite ease-in-out",
                            }}
                          >
                            <Shield size={isMobile ? 18 : 22} />
                          </div>
                          <h3
                            style={{
                              fontSize: isMobile ? "18px" : "22px",
                              fontWeight: "bold",
                              color: member.color,
                              margin: 0,
                            }}
                          >
                            {member.name}
                          </h3>
                        </div>

                        <p
                          style={{
                            fontSize: isMobile ? "14px" : "16px",
                            color: "rgba(255, 255, 255, 0.85)",
                            marginBottom: "16px",
                            fontWeight: "500",
                          }}
                        >
                          {member.role}
                        </p>

                        <p
                          style={{
                            fontSize: isMobile ? "13px" : "15px",
                            color: "rgba(255, 255, 255, 0.85)",
                            lineHeight: 1.5,
                            marginBottom: "16px",
                          }}
                        >
                          {member.description}
                        </p>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                            marginBottom: "16px",
                          }}
                        >
                          {member.details.map((detail, idx) => (
                            <div
                              key={idx}
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "12px",
                              }}
                            >
                              <div
                                style={{
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%",
                                  background: member.color,
                                  marginTop: "8px",
                                  flexShrink: 0,
                                }}
                              />
                              <p
                                style={{
                                  fontSize: isMobile ? "12px" : "14px",
                                  color: "rgba(255, 255, 255, 0.75)",
                                  lineHeight: "1.5",
                                  margin: 0,
                                }}
                              >
                                {detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Continue Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            <motion.button
              onClick={handleNext}
              whileHover={isMobile ? {} : { scale: 1.05, boxShadow: "0 12px 36px rgba(255, 140, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: isMobile ? "14px 28px" : "18px 36px",
                background: "linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%)",
                border: "none",
                borderRadius: "50px",
                color: "white",
                fontSize: isMobile ? "16px" : "18px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 8px 25px rgba(255, 140, 0, 0.25)",
                textTransform: "none",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? "200px" : "none",
                justifyContent: "center",
              }}
              aria-label="Navigate to gallery page"
            >
              Continue
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight size={isMobile ? 20 : 24} />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes pulse-icon {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes arrow-float {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  )
}

export default TeamPage
