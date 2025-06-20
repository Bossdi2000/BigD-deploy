import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Shield, Zap, ArrowRight } from 'lucide-react';

const TeamPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/gallery');
  };

  const teamMembers = [
    {
      name: 'Megan W',
      role: 'Sign Intern',
      description: 'Megan W is the intern for the @sign account, recognized for her vibrant, warm, and energetic online presence.',
      details: [
        'Actively supports user engagement and creative initiatives.',
        'Assists with tattoo reimbursement efforts to celebrate community loyalty.',
        'Joined the May 30, 2025 “tea party” discussion, adding energy and relatability.',
      ],
      image: 'SIGN10.jpeg',
      color: '#FF8C00',
    },
    {
      name: 'Zoe Chen',
      role: 'Community Moderator',
      description: 'Zoe Chen is the community moderator for the @sign account, supporting Sign’s mission to simplify decentralized agreements.',
      details: [
        'Coordinates user interactions and manages direct messages.',
        'Helps organize community-driven events highlighting Sign’s core products.',
        'Contributed to the May 30, 2025 “tea party” discussion about the Sign Super App.',
      ],
      image: 'SIGN11.jpeg',
      color: '#3B82F6',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.03, boxShadow: '0 12px 36px rgba(0, 0, 0, 0.3)', transition: { duration: 0.3 } },
  };

  return (
    <Box
      sx={{
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
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
        rel="stylesheet"
      />

      <Box sx={{ position: 'absolute', inset: 0 }}>
        <Box
          sx={{
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
        <Box
          sx={{
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
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '100px',
          left: '80px',
          color: 'rgba(255, 140, 0, 0.3)',
          zIndex: 1,
          animation: 'float 4s infinite ease-in-out',
        }}
      >
        <Shield size={24} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '150px',
          right: '100px',
          color: 'rgba(168, 85, 247, 0.3)',
          zIndex: 1,
          animation: 'float 3s infinite ease-in-out 1s',
        }}
      >
        <Zap size={22} />
      </Box>

      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          width: '100%',
          padding: '0 1.5rem',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 'bold',
                color: 'white',
                margin: '0 0 8px 0',
                lineHeight: 1.1,
              }}
            >
              Meet the Team
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: 'clamp(2.9rem, 3vw, 2rem)',
                fontWeight: 'bold',
                color: '#FF8C00',
                fontFamily: "'Playfair Display', serif",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Sign’s Community Champions
            </Typography>
          </Box>

          <Box
            sx={{
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 140, 0, 0.3)',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '40px',
                textAlign: 'center',
                textShadow: '0 2px 8px rgba(255, 140, 0, 0.3)',
              }}
            >
              Our Community Leaders
            </Typography>

            <Box
              className="team-grid"
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(350px, 400px))',
                justifyContent: 'center',
                gap: '32px',
                width: '100%',
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
                    <Card
                      sx={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        border: `1px solid ${member.color}40`,
                        borderRadius: '16px',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                        position: 'relative',
                        overflow: 'hidden',
                        height: 'auto',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '-30%',
                          right: '-30%',
                          width: '180px',
                          height: '180px',
                          background: `${member.color}15`,
                          borderRadius: '50%',
                          filter: 'blur(40px)',
                        }}
                      />

                      <Box sx={{ position: 'relative', height: '250px' }}>
                        <img
                          src={member.image}
                          alt={`${member.name} Portrait`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <Box
                          sx={{
                            display: 'none',
                            height: '250px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '16px',
                            textAlign: 'center',
                            padding: '12px',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                          }}
                        >
                          <Box sx={{ textAlign: 'center' }}>
                            <Typography>Team Member Portrait</Typography>
                          </Box>
                        </Box>
                      </Box>

                      <CardContent sx={{ padding: '24px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                          <Box
                            sx={{
                              padding: '8px',
                              background: 'rgba(255, 140, 0, 0.2)',
                              borderRadius: '50%',
                              color: '#FF8C00',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 4px 12px rgba(255, 140, 0, 0.15)',
                              animation: 'pulse-icon 1.5s infinite ease-in-out',
                            }}
                          >
                            <Shield size={22} />
                          </Box>
                          <Typography
                            variant="h3"
                            sx={{ fontSize: '22px', fontWeight: 'bold', color: member.color }}
                          >
                            {member.name}
                          </Typography>
                        </Box>

                        <Typography
                          variant="subtitle1"
                          sx={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '16px' }}
                        >
                          {member.role}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5, marginBottom: '16px' }}
                        >
                          {member.description}
                        </Typography>

                        <List sx={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                          {member.details.map((detail, idx) => (
                            <ListItem key={idx} sx={{ padding: 0, alignItems: 'flex-start', gap: '12px' }}>
                              <ListItemIcon sx={{ minWidth: 'auto' }}>
                                <Box
                                  sx={{
                                    width: '6px',
                                    height: '6px',
                                    borderRadius: '50%',
                                    background: member.color,
                                    marginTop: '8px',
                                  }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={detail}
                                primaryTypographyProps={{
                                  fontSize: '14px',
                                  color: 'rgba(255, 255, 255, 0.75)',
                                  lineHeight: '1.5',
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '40px' }}>
            <Button
              component={motion.button}
              onClick={handleNext}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 36px rgba(255, 140, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '18px 36px',
                background: 'linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%)',
                border: 'none',
                borderRadius: '50px',
                color: 'white',
                fontSize: '18px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(255, 140, 0, 0.25)',
                textTransform: 'none',
              }}
              aria-label="Navigate to gallery page"
            >
              Continue
              <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
                <ArrowRight size={24} />
              </motion.div>
            </Button>
          </Box>
        </Box>
      </Box>

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

        @media (max-width: 900px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          h1 { font-size: 2rem !important; }
          h2 { font-size: 1.5rem !important; }
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </Box>
  );
};

export default TeamPage;