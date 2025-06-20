import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Heart, DollarSign, Unlock, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignIntroduction = () => {
  const navigate = useNavigate();

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
    hidden: { y: 20, opacity: 0 },
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
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const pillars = [
    {
      topic: 'Money',
      icon: DollarSign,
      title: 'Sign on Money',
      description: 'Powers the backbone of DeFi through TokenTable, distributing $4B+ in tokens to 40M+ wallets.',
      features: [
        'Connected traditional financial data via Plaid',
        'Cross-chain agreements on Bitcoin, Ethereum, Solana',
        'Over $4B distributed to 40M+ wallets',
      ],
      color: '#10B981',
    },
    {
      topic: 'Freedom',
      icon: Unlock,
      title: 'Sign on Freedom',
      description: 'Building self-sovereignty through SignPass digital passport and on-chain identity solutions.',
      features: [
        'First on-chain permanent residency with Sierra Leone',
        'Digital passport for borderless identity',
        'Cryptographic keypairs for data ownership',
      ],
      color: '#3B82F6',
    },
    {
      topic: 'Integrity',
      icon: CheckCircle,
      title: 'Sign on Integrity',
      description: 'Omni-chain attestation engine creating tamper-proof, verifiable records on decentralized networks.',
      features: [
        'AES-256 and ECIES encryption for privacy',
        'Compliance with global e-signature laws',
        'Prometheus Accord: on-chain ethical AI framework',
      ],
      color: '#8B5CF6',
    },
  ];

  const handleNext = () => {
    navigate('/core-contributors');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: '#010B13',
        position: 'relative',
        padding: '40px 0',
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
          top: '80px',
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
          top: '130px',
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
          padding: '0 1rem',
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
          }}
        >
          {/* Introduction Section with Image and Text in a Container */}
          <motion.div
            variants={itemVariants}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 140, 0, 0.3)',
              borderRadius: '20px',
              padding: '30px',
              display: 'flex',
              flexDirection: 'row',
              gap: '30px',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            }}
          >
            {/* Image on Left */}
            <motion.div
              whileHover={{ scale: 1.01, y: -5 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '450px',
                height: '400px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
                background: 'rgba(255, 255, 0.05)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 140, 0, 0.3)',
                flexShrink: 0,
              }}
            >
              <img
                src="SIGN1.jpg"
                alt="Sign Platform Interface"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '15px',
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, rgba(255, 140, 0, 0.2) 0%, rgba(168, 85, 247, 0.2) 50%, rgba(59, 130, 246, 0.2) 100%)',
                  display: 'none',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  style={{
                    padding: '20px',
                    background: 'rgba(255, 140, 0, 0.3)',
                    borderRadius: '50%',
                    color: '#FF8C00',
                  }}
                >
                  <Shield size={40} />
                </motion.div>
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: 'bold' }}>
                    Sign Platform
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                    Building the Future of Digital Trust
                  </p>
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
                  padding: '30px 20px 20px 20px',
                  color: 'white',
                }}
              >
                <h3
                  style={{
                    margin: '0 0 6px 0',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#FF8C00',
                  }}
                >
                  The Sign Platform
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.85)',
                    lineHeight: '1.4',
                  }}
                >
                  Experience digital agreements with cross-chain compatibility and enterprise-grade security.
                </p>
              </div>
            </motion.div>

            {/* Introduction Text on Right */}
            <motion.div
              variants={itemVariants}
              style={{
                flex: 1,
                minWidth: '300px',
                maxWidth: '550px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                height: '100%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <motion.div
                  variants={iconVariants}
                  style={{
                    padding: '8px',
                    background: 'rgba(255, 140, 0, 0.2)',
                    borderRadius: '12px',
                    color: '#FF8C00',
                  }}
                >
                  <Heart size={24} />
                </motion.div>
                <h2
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 0,
                    lineHeight: '1.1',
                  }}
                >
                  Introduction to{' '}
                  <span
                    style={{
                      color: '#FF8C00',
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    Sign
                  </span>
                </h2>
              </div>

              <h3
                style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  fontWeight: '600',
                  color: 'rgba(255, 255, 255, 0.9)',
                  margin: 0,
                  lineHeight: '1.3',
                }}
              >
                Welcome to the World of Sign
              </h3>

              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: '1.6',
                  margin: 0,
                  flex: 1,
                }}
              >
                Sign is a tech company reimagining how we trust, verify, and transact in the digital age. Sign builds tools that let humans make meaningful agreements, prove ownership, and verify credentials, All without relying on centralized systems.
              </p>

              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: '1.6',
                  margin: 0,
                  flex: 1,
                }}
              >
                With deep roots in Web3, Sign combines legal validity, privacy, and decentralization into a seamless, borderless experience. It’s not just about paperwork on-chain; it’s about building a world where trust is programmable, agreements are permissionless, and data belongs to you.
              </p>

              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: '1.6',
                  margin: 0,
                  flex: 1,
                }}
              >
                From facilitating cross-chain financial deals to launching the world’s first on-chain residency card, Sign is creating a global trust layerone attestation at a time.
              </p>

              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: '1.6',
                  margin: 0,
                  flex: 1,
                }}
              >
                Their vision speaks in three powerful languages:{' '}
                <span style={{ fontWeight: 'bold', color: '#10B981' }}>Money.</span>{' '}
                <span style={{ fontWeight: 'bold', color: '#3B82F6' }}>Freedom.</span>{' '}
                <span style={{ fontWeight: 'bold', color: '#8B5CF6' }}>Integrity.</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Three Pillars Section with Enhanced Heading in a Single Container */}
          <motion.div
            variants={itemVariants}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 140, 0, 0.3)',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {/* Enhanced Heading for Pillars */}
            <motion.div
              variants={itemVariants}
              style={{
                textAlign: 'center',
                marginBottom: '10px',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 'bold',
                  color: 'white',
                  margin: '0 0 10px 0',
                  lineHeight: '1.2',
                  textShadow: '0 2px 8px rgba(255, 140, 0, 0.3)',
                }}
              >
                Our Vision Speaks in Three Powerful Languages
              </h2>
            </motion.div>

            {/* Pillars with Topic Labels */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.03,
                      y: -6,
                      transition: { duration: 0.2 },
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${pillar.color}40`,
                      borderRadius: '20px',
                      padding: '20px',
                      position: 'relative',
                      overflow: 'hidden',
                      flex: '1',
                      minWidth: '280px',
                      maxWidth: '360px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {/* Decorative Background */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-40%',
                        right: '-40%',
                        width: '150px',
                        height: '150px',
                        background: `${pillar.color}15`,
                        borderRadius: '50%',
                        filter: 'blur(40px)',
                      }}
                    />

                    {/* Topic Label */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        background: `${pillar.color}20`,
                        color: pillar.color,
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        boxShadow: `0 2px 6px ${pillar.color}40`,
                      }}
                    >
                      {pillar.topic}
                    </div>

                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', marginTop: '20px' }}>
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                          padding: '8px', // Reduced padding to match smaller icon
                          background: 'rgba(255, 140, 0, 0.2)',
                          borderRadius: '50%',
                          color: '#FF8C00',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(255, 140, 0, 0.15)',
                        }}
                      >
                        <IconComponent size={20} /> {/* Reduced size from 28 to 20 */}
                      </motion.div>
                      <div>
                        <h2
                          style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: pillar.color,
                            margin: '0 0 6px 0',
                          }}
                        >
                          {pillar.title}
                        </h2>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.85)',
                        lineHeight: '1.5',
                        marginBottom: '16px',
                      }}
                    >
                      {pillar.description}
                    </p>

                    {/* Features */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {pillar.features.map((feature, featureIndex) => (
                        <div key={featureIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <div
                            style={{
                              width: '5px',
                              height: '5px',
                              borderRadius: '50%',
                              background: pillar.color,
                              marginTop: '7px',
                              flexShrink: 0,
                            }}
                          />
                          <span style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '13px', lineHeight: '1.4' }}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Next Button */}
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

export default SignIntroduction;