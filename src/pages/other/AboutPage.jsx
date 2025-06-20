import React from 'react';
import { motion } from 'framer-motion';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Avatar, 
  Chip,
  Stack
} from '@mui/material';
import { Code, Lightbulb, ExternalLink, Mail, Twitter, MessageCircle } from 'lucide-react';

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const team = [
    {
      name: "Dev Bossdi (BigD)",
      role: "Sign-Brochure Founder (Full Stack Developer)",
      bio: "I'm the developer who brought Sign Brochure to life through code. With extensive experience in modern web technologies, I specialize in creating robust, scalable applications that deliver exceptional user experiences. My passion lies in transforming innovative ideas into functional, beautiful digital solutions.",
      skills: ["React", "Node.js", "JavaScript", "UI/UX", "Database Design"],
      avatar: "/Dev1.jpeg", // Public folder path
      icon: <Code size={24} />,
      links: {
        github: "https://github.com/Bossdi2000",
        email: "alonigbeja2000@gmail.com",
        twitter: "https://x.com/_BigDe",
        whatsapp: "https://wa.me/message/2IIPIKYWPU4SC1?src=qr"
      }
    },
    {
      name: "Ifoh Victoria Chidiebere (Debere)",
      role: "Sign-Brochure Founder(Product Visionary)",
      bio: "I'm the creative mind behind the Sign Brochure concept. With a keen eye for identifying market opportunities and user needs, I conceptualized this platform to bridge the gap between businesses and their digital presence. My focus is on strategic planning and ensuring our product truly serves our users.",
      skills: ["Product Strategy", "Market Research", "UX Design", "Business Development", "Innovation"],
      avatar: "/Dev2.jpeg", // Public folder path
      icon: <Lightbulb size={24} />,
      links: {
        portfolio: "#",
        email: "ifohvictoria30@gmail.com",
        twitter: "https://x.com/Chi_Debere",
        whatsapp: "https://wa.me/2349155364302"
      }
    }
  ];

  return (
    <Box 
      sx={{ 
        width: '100vw',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a365d 0%, #ff8c00 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        overflowY: 'auto',
        py: { xs: 4, md: 8 }
      }}
    >
      <Container 
        maxWidth={false}
        sx={{ 
          width: '100%',
          px: { xs: 2, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: '100%' }}
        >
          {/* Header Section */}
          <motion.div variants={cardVariants}>
            <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  color: 'white',
                  fontWeight: 'bold',
                  mb: 2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  fontSize: { xs: '2rem', md: '3rem' }
                }}
              >
                About Us
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', md: '1.5rem' }
                }}
              >
                Meet the dynamic duo behind Sign Brochure - where innovative ideas meet expert development
              </Typography>
            </Box>
          </motion.div>

          {/* Team Cards */}
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={{ xs: 2, md: 4 }}
            justifyContent="center"
            alignItems="stretch"
            sx={{ width: '100%' }}
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                style={{ flex: 1, maxWidth: { xs: '100%', md: '600px' } }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 3,
                    border: '2px solid rgba(255, 140, 0, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                      border: '2px solid #ff8c00'
                    }
                  }}
                >
                  <CardContent sx={{ 
                    p: { xs: 2, md: 4 }, 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column' 
                  }}>
                    {/* Avatar and Basic Info */}
                    <Box display="flex" alignItems="center" mb={3}>
                      <Avatar
                        src={member.avatar}
                        sx={{ 
                          width: { xs: 60, md: 80 }, 
                          height: { xs: 60, md: 80 }, 
                          mr: 3,
                          border: '3px solid #ff8c00',
                          objectFit: 'cover' // Ensure proper image scaling
                        }}
                      />
                      <Box>
                        <Typography 
                          variant="h5" 
                          component="h3"
                          sx={{ 
                            color: '#1a365d',
                            fontWeight: 'bold',
                            mb: 1,
                            fontSize: { xs: '1.25rem', md: '1.5rem' }
                          }}
                        >
                          {member.name}
                        </Typography>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Box 
                            sx={{ 
                              color: '#ff8c00',
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            {member.icon}
                          </Box>
                          <Typography 
                            variant="subtitle1"
                            sx={{ 
                              color: '#1a365d',
                              fontWeight: 'medium',
                              fontSize: { xs: '0.875rem', md: '1rem' }
                            }}
                          >
                            {member.role}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    {/* Bio */}
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#4a5568',
                        lineHeight: 1.7,
                        mb: 3,
                        flex: 1,
                        fontSize: { xs: '0.875rem', md: '1rem' }
                      }}
                    >
                      {member.bio}
                    </Typography>

                    {/* Skills */}
                    <Box mb={3}>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          color: '#1a365d',
                          fontWeight: 'bold',
                          mb: 2,
                          fontSize: { xs: '0.875rem', md: '1rem' }
                        }}
                      >
                        Expertise
                      </Typography>
                      <Box display="flex" flexWrap="wrap" gap={1}>
                        {member.skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(255, 140, 0, 0.1)',
                              color: '#1a365d',
                              border: '1px solid rgba(255, 140, 0, 0.3)',
                              '&:hover': {
                                backgroundColor: 'rgba(255, 140, 0, 0.2)'
                              },
                              fontSize: { xs: '0.75rem', md: '0.875rem' }
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    {/* Contact Links */}
                    <Box display="flex" gap={2} mt="auto" flexWrap="wrap">
                      <Box
                        component="a"
                        href={member.links.github || member.links.portfolio}
                        sx={{
                          p: 1,
                          border: '2px solid #1a365d',
                          borderRadius: 2,
                          color: '#1a365d',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#1a365d',
                            color: 'white',
                            transform: 'scale(1.1)'
                          }
                        }}
                      >
                        <ExternalLink size={12} />
                      </Box>
                      <Box
                        component="a"
                        href={`mailto:${member.links.email}`}
                        sx={{
                          p: 1,
                          border: '2px solid #ff8c00',
                          borderRadius: 2,
                          color: '#ff8c00',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#ff8c00',
                            color: 'white',
                            transform: 'scale(1.1)'
                          }
                        }}
                      >
                        <Mail size={12} />
                      </Box>
                      <Box
                        component="a"
                        href={member.links.twitter}
                        sx={{
                          p: 1,
                          border: '2px solid #1DA1F2',
                          borderRadius: 2,
                          color: '#1DA1F2',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#1DA1F2',
                            color: 'white',
                            transform: 'scale(1.1)'
                          }
                        }}
                      >
                        <Twitter size={12} />
                      </Box>
                      <Box
                        component="a"
                        href={member.links.whatsapp}
                        sx={{
                          p: 1,
                          border: '2px solid #25D366',
                          borderRadius: 2,
                          color: '#25D366',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#25D366',
                            color: 'white',
                            transform: 'scale(1.1)'
                          }
                        }}
                      >
                        <MessageCircle size={12} />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Stack>

          {/* Footer Section */}
          <motion.div variants={cardVariants}>
            <Box 
              textAlign="center" 
              mt={{ xs: 4, md: 8 }}
              p={{ xs: 2, md: 4 }}
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 3,
                backdropFilter: 'blur(10px)',
                width: '100%',
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'white',
                  mb: 2,
                  fontWeight: 'medium',
                  fontSize: { xs: '1rem', md: '1.25rem' }
                }}
              >
                Together, we're building the future of digital brochures
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255,255,255,0.8)',
                  maxWidth: '600px',
                  mx: 'auto',
                  fontSize: { xs: '0.875rem', md: '1rem' }
                }}
              >
                Our collaboration combines visionary thinking with technical expertise to create 
                solutions that truly make a difference for businesses and their customers.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutPage;