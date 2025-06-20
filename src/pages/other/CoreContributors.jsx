import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Code, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CoreContributors = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState([false, false, false]); // State to track expanded status for each founder

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const founders = [
    {
      name: 'Xin Jian',
      role: 'CEO & Co-Founder',
      description:
        'A visionary in decentralized infrastructure, Xin brings his experience from Fundamental Labs and Huobi Group to lead EthSign’s strategic direction. Under his leadership, EthSign bridges Web2 familiarity with Web3 innovation, securing agreements through verifiable, decentralized tools.',
      icon: Shield,
      imagePlaceholder: 'SIGN21.jpeg',
      color: '#FF8C00',
    },
    {
      name: 'Potter Li',
      role: 'Co-Founder & Tech Lead',
      description:
        'Tech powerhouse behind TokenTable and EthSign’s engineering stack. Potter’s background from USC, UBC, and Morgan Stanley helped shape EthSign’s core protocol and fundraising features, ensuring robust security and earning the trust of VCs like Sequoia Capital.',
      icon: Zap,
      imagePlaceholder: 'SIGN4.jpeg',
      color: '#FF6B35',
    },
    {
      name: 'Jack Xu',
      role: 'Co-Founder',
      description:
        'Ethereum full-stack developer and architect of EthSign’s smart contracts. With past experience at GM and Fidelity, Jack drives secure and scalable systems, powering everything from decentralized signatures to on-chain governance, ensuring top-tier reliability and compliance.',
      icon: Code,
      imagePlaceholder: 'SIGN3.jpeg',
      color: '#FFA500',
    },
  ];

  const toggleDetails = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const handleNext = () => {
    navigate('/product-ecosystem'); // Navigate to ProductEcosystem page
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: '#010B13',
        position: 'relative',
        padding: '60px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Background Effects */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'rgba(255, 140, 0, 0.12)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'pulse 4s infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            right: '10%',
            width: '250px',
            height: '250px',
            background: 'rgba(168, 85, 247, 0.12)',
            borderRadius: '50%',
            filter: 'blur(50px)',
            animation: 'pulse 4s infinite 2s',
          }}
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '100px',
          left: '80px',
          color: 'rgba(255, 140, 0, 0.3)',
          zIndex: 1,
        }}
      >
        <Shield size={20} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          top: '150px',
          right: '100px',
          color: 'rgba(168, 85, 247, 0.3)',
          zIndex: 1,
        }}
      >
        <Zap size={18} />
      </motion.div>

      {/* Main Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          width: '100%',
          padding: '0 1.5rem',
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <motion.div variants={itemVariants}>
              <h1
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 'bold',
                  color: 'white',
                  margin: '0 0 20px 0',
                  lineHeight: '1.1',
                }}
              >
                Core Contributors —{' '}
                <span
                  style={{
                    color: '#FF8C00',
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  The Minds Behind EthSign
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Founders Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
              width: '100%',
            }}
          >
            {/* First Row: Two Founders Side by Side */}
            <div
              style={{
                display: 'flex',
                gap: '30px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {founders.slice(0, 2).map((founder, index) => {
                const IconComponent = founder.icon;
                const isExpanded = expanded[index];
                return (
                  <motion.div
                    key={founder.name}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      y: -6,
                      transition: { duration: 0.2 },
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${founder.color}40`,
                      borderRadius: '20px',
                      padding: '30px',
                      position: 'relative',
                      overflow: 'hidden',
                      flex: '1',
                      minWidth: '340px',
                      maxWidth: '550px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                      height: isExpanded ? 'auto' : '500px',
                    }}
                  >
                    {/* Decorative Background */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-40%',
                        right: '-40%',
                        width: '200px',
                        height: '200px',
                        background: `${founder.color}15`,
                        borderRadius: '50%',
                        filter: 'blur(40px)',
                      }}
                    />

                    {/* Image - Increased Size */}
                    <motion.div
                      variants={iconVariants}
                      style={{
                        alignSelf: 'center',
                        width: '180px',
                        height: '240px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: `2px solid ${founder.color}80`,
                        boxShadow: `0 4px 12px ${founder.color}40`,
                      }}
                    >
                      <img
                        src={founder.imagePlaceholder}
                        alt={`${founder.name} Image`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </motion.div>

                    {/* Founder Info */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <h2
                          style={{
                            fontSize: '22px',
                            fontWeight: 'bold',
                            color: founder.color,
                            margin: 0,
                          }}
                        >
                          {founder.name}
                        </h2>
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                          style={{
                            padding: '6px',
                            background: 'rgba(255, 140, 0, 0.15)',
                            borderRadius: '8px',
                            color: '#FF8C00',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(255, 140, 0, 0.2)',
                          }}
                        >
                          <IconComponent size={18} />
                        </motion.div>
                      </div>
                      <p
                        style={{
                          fontSize: '16px',
                          color: 'rgba(255, 255, 255, 0.7)',
                          margin: '0 0 16px 0',
                          fontWeight: '500',
                        }}
                      >
                        {founder.role}
                      </p>
                      <p
                        style={{
                          fontSize: '15px',
                          color: 'rgba(255, 255, 255, 0.85)',
                          lineHeight: '1.7',
                          margin: '0 0 20px 0',
                          flex: 1,
                        }}
                      >
                        {founder.description}
                      </p>
                      {founder.description.length > 150 && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleDetails(index)}
                          style={{
                            alignSelf: 'center',
                            padding: '8px 24px',
                            background: 'linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%)',
                            border: 'none',
                            borderRadius: '20px',
                            color: 'white',
                            fontSize: '14px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(255, 140, 0, 0.2)',
                            marginBottom: '10px',
                          }}
                        >
                          {isExpanded ? 'Show Less' : 'Show More'}
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Second Row: One Founder Centered */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {founders.slice(2, 3).map((founder, index) => {
                const IconComponent = founder.icon;
                const adjustedIndex = index + 2;
                const isExpanded = expanded[adjustedIndex];
                return (
                  <motion.div
                    key={founder.name}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      y: -6,
                      transition: { duration: 0.2 },
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${founder.color}40`,
                      borderRadius: '20px',
                      padding: '30px',
                      position: 'relative',
                      overflow: 'hidden',
                      width: '100%',
                      maxWidth: '550px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px',
                      height: isExpanded ? 'auto' : '500px',
                    }}
                  >
                    {/* Decorative Background */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-40%',
                        right: '-40%',
                        width: '200px',
                        height: '200px',
                        background: `${founder.color}15`,
                        borderRadius: '50%',
                        filter: 'blur(40px)',
                      }}
                    />

                    {/* Image - Increased Size */}
                    <motion.div
                      variants={iconVariants}
                      style={{
                        alignSelf: 'center',
                        width: '180px',
                        height: '240px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: `2px solid ${founder.color}80`,
                        boxShadow: `0 4px 12px ${founder.color}40`,
                      }}
                    >
                      <img
                        src={founder.imagePlaceholder}
                        alt={`${founder.name} Image`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </motion.div>

                    {/* Founder Info */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <h2
                          style={{
                            fontSize: '22px',
                            fontWeight: 'bold',
                            color: founder.color,
                            margin: 0,
                          }}
                        >
                          {founder.name}
                        </h2>
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                          style={{
                            padding: '6px',
                            background: 'rgba(255, 140, 0, 0.15)',
                            borderRadius: '8px',
                            color: '#FF8C00',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(255, 140, 0, 0.2)',
                          }}
                        >
                          <IconComponent size={18} />
                        </motion.div>
                      </div>
                      <p
                        style={{
                          fontSize: '16px',
                          color: 'rgba(255, 255, 255, 0.7)',
                          margin: '0 0 16px 0',
                          fontWeight: '500',
                        }}
                      >
                        {founder.role}
                      </p>
                      <p
                        style={{
                          fontSize: '15px',
                          color: 'rgba(255, 255, 255, 0.85)',
                          lineHeight: '1.7',
                          margin: '0 0 20px 0',
                          flex: 1,
                        }}
                      >
                        {founder.description}
                      </p>
                      {founder.description.length > 150 && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleDetails(adjustedIndex)}
                          style={{
                            alignSelf: 'center',
                            padding: '8px 24px',
                            background: 'linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%)',
                            border: 'none',
                            borderRadius: '20px',
                            color: 'white',
                            fontSize: '14px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(255, 140, 0, 0.2)',
                            marginBottom: '10px',
                          }}
                        >
                          {isExpanded ? 'Show Less' : 'Show More'}
                        </motion.button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Continue Journey Button */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
                marginBottom: '40px',
              }}
            >
              <motion.button
                onClick={handleNext}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(255, 140, 0, 0.3)',
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%)',
                  border: 'none',
                  borderRadius: '50px',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 8px 25px rgba(255, 140, 0, 0.25)',
                  transition: 'all 0.3s ease',
                }}
              >
                Continue
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default CoreContributors;