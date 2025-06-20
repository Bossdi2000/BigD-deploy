"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Shield, Zap, DollarSign, Unlock, CheckCircle, ArrowRight } from 'lucide-react'

const ProductEcosystem = () => {
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
    navigate("/team")
  }

  const products = [
    {
      name: "Token Table",
      icon: DollarSign,
      description: "Cap table and token allocation management for DAOs, founders, and projects.",
      details: [
        "Streamlines token vesting and airdrop distribution.",
        "Used by DAOs to manage contributors across global teams.",
        "Provides a clear interface for tracking allocations and schedules.",
      ],
      image: "SIGN7.png",
      url: "https://tokentable.ethsign.xyz",
      color: "#10B981",
    },
    {
      name: "Sign Pass",
      icon: Unlock,
      description: "On-chain identity and reputation system for Web3.",
      details: [
        "Claim your Sign Pass as a Soulbound Token (SBT) to build a portable identity.",
        "Enables governance participation, access to exclusive communities, and reputation-based privileges.",
        "Visualized as a unique SBT design, tied to your on-chain credentials.",
      ],
      image: "SIGN8.png",
      url: "https://signpass.ethsign.xyz",
      color: "#3B82F6",
    },
    {
      name: "Sign Token",
      icon: CheckCircle,
      description: "Governance token powering the Sign ecosystem.",
      details: [
        "Used to create/verify attestations, stake for reputation, and vote on protocol upgrades.",
        "Live on Ethereum and other EVM-compatible chains.",
        "10B total supply, 1.2B circulating, driven by real usage in the ecosystem.",
      ],
      image: "SIGN6.jpg",
      url: "https://sign.ethsign.xyz",
      color: "#8B5CF6",
    },
  ]

  const communities = [
    {
      category: "DAOs",
      caseStudy:
        "A DAO used Token Table to manage 20 contributors across 8 countries, ensuring transparent token vesting schedules and airdrop distributions.",
      color: "#10B981",
    },
    {
      category: "Creator Collectives",
      caseStudy:
        "A creator collective leveraged Sign Pass to grant exclusive access to their NFT drops, using on-chain reputation to reward loyal fans.",
      color: "#3B82F6",
    },
    {
      category: "DeSci",
      caseStudy:
        "A DeSci project utilized Sign Token to govern funding proposals, enabling researchers to vote on longevity research initiatives.",
      color: "#8B5CF6",
    },
    {
      category: "NFT Projects",
      caseStudy:
        "An NFT project integrated Sign Pass SBTs to verify holder identities, preventing bots from accessing their whitelist minting events.",
      color: "#FF8C00",
    },
  ]

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
            <Shield size={20} />
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
            <Zap size={18} />
          </div>
        </>
      )}

      {/* Main Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: "10",
          maxWidth: "1200px",
          width: "100%",
          padding: isMobile ? "0 16px" : "0 1.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "30px" : "40px",
          }}
        >
          {/* Header Section */}
          <div style={{ textAlign: "center", marginBottom: isMobile ? "20px" : "40px" }}>
            <h1
              style={{
                fontSize: isMobile ? "1.8rem" : "clamp(2rem, 4vw, 3rem)",
                fontWeight: "bold",
                color: "white",
                margin: "0 0 20px",
                lineHeight: "1.1",
              }}
            >
              Product Ecosystem —{" "}
              <span
                style={{
                  color: "#FF8C00",
                  fontFamily: "'Playfair Display', serif",
                  display: isMobile ? "block" : "inline",
                  fontSize: isMobile ? "1.5rem" : "inherit",
                }}
              >
                Sign's Suite of Web3 Tools
              </span>
            </h1>
          </div>

          {/* Product Ecosystem Section */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 140, 0, 0.3)",
              borderRadius: "20px",
              padding: isMobile ? "20px" : "30px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h2
              style={{
                fontSize: isMobile ? "1.4rem" : "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: "bold",
                color: "white",
                marginBottom: "24px",
                textAlign: "center",
                textShadow: "0 2px 8px rgba(255, 140, 0, 0.3)",
              }}
            >
              Explore Sign's Ecosystem
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
                justifyContent: "center",
                gap: isMobile ? "16px" : "24px",
                width: "100%",
              }}
            >
              {products.map((product) => {
                const IconComponent = product.icon
                return (
                  <div
                    key={product.name}
                    style={{
                      background: "rgba(255, 255, 255, 0.06)",
                      border: `1px solid ${product.color}40`,
                      borderRadius: "16px",
                      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.2)",
                      position: "relative",
                      overflow: "hidden",
                      height: "auto",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      maxWidth: isMobile ? "100%" : "350px",
                      margin: isMobile ? "0 auto" : "0",
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = "scale(1.03) translateY(-6px)"
                        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = "scale(1) translateY(0)"
                        e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.2)"
                      }
                    }}
                  >
                    {/* Decorative Background */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-40%",
                        right: "-40%",
                        width: isMobile ? "80px" : "120px",
                        height: isMobile ? "80px" : "120px",
                        background: `${product.color}40`,
                        borderRadius: "50%",
                        filter: "blur(30px)",
                      }}
                    />
                    {/* Product Image */}
                    <div style={{ position: "relative", height: isMobile ? "120px" : "150px" }}>
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={`${product.name} Interface`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                        onError={(e) => {
                          console.error(`Failed to load product image: ${product.image}`)
                          e.target.style.display = "none"
                          e.target.nextSibling.style.display = "flex"
                        }}
                      />
                      <div
                        style={{
                          display: "none",
                          height: isMobile ? "120px" : "150px",
                          background: "rgba(255, 255, 255, 0.05)",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "12px",
                          textAlign: "center",
                          padding: "8px",
                          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                        }}
                      >
                        <div style={{ textAlign: "center" }}>
                          <IconComponent size={18} style={{ color: product.color, marginBottom: "6px" }} />
                          <div>Product Interface Preview</div>
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: isMobile ? "12px" : "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                        <div
                          style={{
                            padding: "6px",
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
                          <IconComponent size={isMobile ? 16 : 18} />
                        </div>
                        <h3
                          style={{
                            fontSize: isMobile ? "16px" : "18px",
                            fontWeight: "bold",
                            color: product.color,
                            margin: 0,
                          }}
                        >
                          {product.name}
                        </h3>
                      </div>
                      <p
                        style={{
                          fontSize: isMobile ? "12px" : "13px",
                          color: "rgba(255, 255, 255, 0.85)",
                          lineHeight: "1.5",
                          marginBottom: "12px",
                        }}
                      >
                        {product.description}
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "12px" }}>
                        {product.details.map((detail, idx) => (
                          <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                            <div
                              style={{
                                width: "4px",
                                height: "4px",
                                borderRadius: "50%",
                                background: product.color,
                                marginTop: "6px",
                                flexShrink: 0,
                              }}
                            />
                            <p
                              style={{
                                color: "rgba(255, 255, 255, 0.75)",
                                fontSize: isMobile ? "11px" : "12px",
                                lineHeight: "1.4",
                                margin: 0,
                              }}
                            >
                              {detail}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>
                        <div
                          style={{
                            width: isMobile ? "50px" : "60px",
                            height: isMobile ? "50px" : "60px",
                            background: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: isMobile ? "9px" : "10px",
                            color: "rgba(255, 255, 255, 0.6)",
                            textAlign: "center",
                          }}
                        >
                          QR Code
                        </div>
                      </div>
                      <p
                        style={{
                          color: "rgba(255, 255, 255, 0.6)",
                          textAlign: "center",
                          display: "block",
                          marginTop: "6px",
                          fontSize: isMobile ? "10px" : "11px",
                          margin: "6px 0 0 0",
                        }}
                      >
                        Scan to visit {product.name}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Communities Built on Sign Section */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.06)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 140, 0, 0.3)",
              borderRadius: "20px",
              padding: isMobile ? "20px" : "30px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h2
              style={{
                fontSize: isMobile ? "1.4rem" : "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: "bold",
                color: "white",
                marginBottom: "24px",
                textAlign: "center",
                textShadow: "0 2px 8px rgba(255, 140, 0, 0.3)",
              }}
            >
              Communities Built on Sign
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(250px, 1fr))",
                gap: isMobile ? "16px" : "24px",
              }}
            >
              {communities.map((community) => (
                <div
                  key={community.category}
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    border: `1px solid ${community.color}40`,
                    borderRadius: "20px",
                    padding: isMobile ? "16px" : "20px",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = "scale(1.03) translateY(-6px)"
                      e.currentTarget.style.boxShadow = "0 12px 36px rgba(0, 0, 0, 0.3)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = "scale(1) translateY(0)"
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.2)"
                    }
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-40%",
                      right: "-40%",
                      width: isMobile ? "100px" : "150px",
                      height: isMobile ? "100px" : "150px",
                      background: `${community.color}40`,
                      borderRadius: "50%",
                      filter: "blur(40px)",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: isMobile ? "16px" : "18px",
                      fontWeight: "bold",
                      color: community.color,
                      marginBottom: "12px",
                    }}
                  >
                    {community.category}
                  </h3>
                  <p
                    style={{
                      fontSize: isMobile ? "13px" : "14px",
                      color: "rgba(255, 255, 255, 0.85)",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    {community.caseStudy}
                  </p>
                </div>
              ))}
            </div>
            {/* Infographic Section */}
            <hr
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "none",
                height: "1px",
                margin: isMobile ? "20px 0" : "30px 0",
              }}
            />
            <h3
              style={{
                fontSize: isMobile ? "1.2rem" : "clamp(1.2rem, 2.5vw, 1.8rem)",
                fontWeight: "600",
                color: "white",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              What's Possible with Sign
            </h3>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "16px",
                padding: isMobile ? "16px" : "20px",
                textAlign: "center",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: isMobile ? "200px" : "500px" }}>
                <img
                  src="/TOOLS.jpeg"
                  alt="Sign Protocols Infographic"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                  onError={(e) => {
                    console.error("Failed to load infographic image: /TOOLS.jpeg")
                    e.target.style.display = "none"
                    e.target.nextSibling.style.display = "flex"
                  }}
                />
                <div
                  style={{
                    display: "none",
                    width: "100%",
                    height: isMobile ? "200px" : "500px",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: isMobile ? "14px" : "16px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  Infographic: What's Possible with Sign
                </div>
              </div>
            </div>
          </div>
          {/* Continue Journey Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            <button
              onClick={handleNext}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: isMobile ? "14px 28px" : "16px 32px",
                background: "linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%)",
                border: "none",
                borderRadius: "50px",
                color: "white",
                fontSize: isMobile ? "15px" : "16px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 8px 25px rgba(255, 140, 0, 0.25)",
                transition: "all 0.3s ease",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? "200px" : "none",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "scale(1.05)"
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(255, 140, 0, 0.3)"
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.transform = "scale(1)"
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(255, 140, 0, 0.25)"
                }
              }}
              aria-label="Navigate to team page"
            >
              Continue
              <div style={{ animation: "arrow-float 1.5s infinite ease-in-out" }}>
                <ArrowRight size={20} />
              </div>
            </button>
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

export default ProductEcosystem
