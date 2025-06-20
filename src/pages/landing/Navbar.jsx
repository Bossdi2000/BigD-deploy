import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw', // Full viewport width
        height: '60px', // Standard navbar height
        zIndex: 50,
        background: 'linear-gradient(90deg, #8B4513, #A0522D, #CD853F)', // Full-width background gradient
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex', // Flex for content alignment
        alignItems: 'center', // Vertically center content
      }}
    >
      <div style={{ 
        width: '100%', // Full width of parent
        maxWidth: '100%', // Remove max-width constraint for full-width content
        padding: '0 24px', // Horizontal padding
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box', // Ensure padding doesn't affect width
      }}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
          style={{ cursor: 'pointer' }}
        >
          <h1 style={{ 
            color: 'white', 
            fontWeight: 'bold', 
            fontSize: '20px', 
            letterSpacing: '1px',
            margin: 0
          }}>
            SIGN BROCHURE
          </h1>
        </motion.div>

        {/* Navigation Links */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px', // Increased gap for better spacing
        }}>
          {['Home', 'About'].map((item, index) => (
            item === 'About' ? (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: '8px 24px',
                  borderRadius: '20px',
                  fontSize: '16px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: 'transparent',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                }}
              >
                <Link
                  to="/about"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit'
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
                  padding: '8px 24px',
                  borderRadius: '20px',
                  fontSize: '16px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: item === 'Home' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  color: item === 'Home' ? 'white' : 'rgba(255, 255, 255, 0.7)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  if (item !== 'Home') {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                  }
                }}
              >
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  {item}
                </Link>
              </motion.div>
            )
          ))}
        </div>

        {/* Right side - Join Us Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <motion.a
            href="https://x.com/sign"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 24px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '20px',
              color: 'white',
              fontSize: '16px',
              fontWeight: '500',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'white';
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            <User size={18} />
            <span>Join Us</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;