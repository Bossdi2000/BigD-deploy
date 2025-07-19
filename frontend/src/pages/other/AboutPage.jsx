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
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const team = [
    {
      name: "Dev Bossdi (BigD)",
      role: "Sign-Brochure Founder (Full Stack Developer)",
      bio: "I'm the developer who brought Sign Brochure to life through code. With extensive experience in modern web technologies, I specialize in creating robust, scalable applications that deliver exceptional user experiences.",
      skills: ["React", "Node.js", "JavaScript", "UI/UX", "Database Design"],
      avatar: "/Dev1.jpeg",
      icon: <Code size={20} />,
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
      bio: "I'm the creative mind behind the Sign Brochure concept. With a keen eye for identifying market opportunities and user needs, I conceptualized this platform to bridge the gap between businesses and their digital presence.",
      skills: ["Product Strategy", "Market Research", "UX Design", "Business Development", "Innovation"],
      avatar: "/Dev2.jpeg",
      icon: <Lightbulb size={20} />,
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
        py: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Container 
        maxWidth="lg"
        sx={{ 
          px: { xs: 1, sm: 2, md: 3 },
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
          {/* Header Section - More Compact */}
          <motion.div variants={cardVariants}>
            <Box textAlign="center" mb={{ xs: 2, sm: 3, md: 4 }}>
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  color: 'white',
                  fontWeight: 'bold',
                  mb: { xs: 1, sm: 1.5, md: 2 },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' }
                }}
              >
                About Us
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  maxWidth: { xs: '100%', sm: '600px', md: '700px' },
                  mx: 'auto',
                  lineHeight: 1.4,
                  fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.25rem', lg: '1.5rem' },
                  px: { xs: 1, sm: 2 }
                }}
              >
                Meet the dynamic duo behind Sign Brochure - where innovative ideas meet expert development
              </Typography>
            </Box>
          </motion.div>

          {/* Team Cards - Optimized for Mobile */}
          <Stack 
            direction="column"
            spacing={{ xs: 2, sm: 2.5, md: 3 }}
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%' }}
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                style={{ 
                  width: '100%',
                  maxWidth: '600px'
                }}
              >
                <Card
                  sx={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: { xs: 2, sm: 2.5, md: 3 },
                    border: '1px solid rgba(255, 140, 0, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: { xs: 'translateY(-4px)', sm: 'translateY(-6px)', md: 'translateY(-8px)' },
                      boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                      border: '1px solid #ff8c00'
                    }
                  }}
                >
                  <CardContent sx={{ 
                    p: { xs: 2, sm: 2.5, md: 3 },
                    display: 'flex', 
                    flexDirection: 'column' 
                  }}>
                    {/* Avatar and Basic Info - Mobile Optimized */}
                    <Box 
                      display="flex" 
                      flexDirection={{ xs: 'column', sm: 'row' }}
                      alignItems={{ xs: 'center', sm: 'flex-start' }}
                      textAlign={{ xs: 'center', sm: 'left' }}
                      mb={{ xs: 2, sm: 2.5, md: 3 }}
                      gap={{ xs: 1.5, sm: 2 }}
                    >
                      <Avatar
                        src={member.avatar}
                        sx={{ 
                          width: { xs: 70, sm: 80, md: 90 }, 
                          height: { xs: 70, sm: 80, md: 90 }, 
                          border: '2px solid #ff8c00',
                          objectFit: 'cover',
                          mb: { xs: 1, sm: 0 }
                        }}
                      />
                      <Box sx={{ flex: 1 }}>
                        <Typography 
                          variant="h5" 
                          component="h3"
                          sx={{ 
                            color: '#1a365d',
                            fontWeight: 'bold',
                            mb: { xs: 0.5, sm: 1 },
                            fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem' },
                            lineHeight: 1.2
                          }}
                        >
                          {member.name}
                        </Typography>
                        <Box 
                          display="flex" 
                          alignItems="center" 
                          justifyContent={{ xs: 'center', sm: 'flex-start' }}
                          gap={1}
                          flexWrap="wrap"
                        >
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
                              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                              lineHeight: 1.3
                            }}
                          >
                            {member.role}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    {/* Bio - More Compact */}
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: '#4a5568',
                        lineHeight: 1.5,
                        mb: { xs: 2, sm: 2.5 },
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                        textAlign: { xs: 'center', sm: 'left' }
                      }}
                    >
                      {member.bio}
                    </Typography>

                    {/* Skills - Compact Layout */}
                    <Box mb={{ xs: 2, sm: 2.5 }}>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          color: '#1a365d',
                          fontWeight: 'bold',
                          mb: { xs: 1, sm: 1.5 },
                          fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                          textAlign: { xs: 'center', sm: 'left' }
                        }}
                      >
                        Expertise
                      </Typography>
                      <Box 
                        display="flex" 
                        flexWrap="wrap" 
                        gap={{ xs: 0.5, sm: 0.75, md: 1 }}
                        justifyContent={{ xs: 'center', sm: 'flex-start' }}
                      >
                        {member.skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(255, 140, 0, 0.1)',
                              color: '#1a365d',
                              border: '1px solid rgba(255, 140, 0, 0.3)',
                              fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
                              height: { xs: 24, sm: 26, md: 28 },
                              '&:hover': {
                                backgroundColor: 'rgba(255, 140, 0, 0.2)'
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    {/* Contact Links - Mobile Optimized */}
                    <Box 
                      display="flex" 
                      gap={{ xs: 1.5, sm: 2 }}
                      justifyContent={{ xs: 'center', sm: 'flex-start' }}
                      flexWrap="wrap"
                    >
                      <Box
                        component="a"
                        href={member.links.github || member.links.portfolio}
                        sx={{
                          p: { xs: 0.75, sm: 1 },
                          border: '2px solid #1a365d',
                          borderRadius: 1.5,
                          color: '#1a365d',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: { xs: 32, sm: 36 },
                          minHeight: { xs: 32, sm: 36 },
                          '&:hover': {
                            backgroundColor: '#1a365d',
                            color: 'white',
                            transform: 'scale(1.05)'
                          }
                        }}
                      >
                        <ExternalLink size={16} />
                      </Box>
                      <Box
                        component="a"
                        href={`mailto:${member.links.email}`}
                        sx={{
                          p: { xs: 0.75, sm: 1 },
                          border: '2px solid #ff8c00',
                          borderRadius: 1.5,
                          color: '#ff8c00',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: { xs: 32, sm: 36 },
                          minHeight: { xs: 32, sm: 36 },
                          '&:hover': {
                            backgroundColor: '#ff8c00',
                            color: 'white',
                            transform: 'scale(1.05)'
                          }
                        }}
                      >
                        <Mail size={16} />
                      </Box>
                      <Box
                        component="a"
                        href={member.links.twitter}
                        sx={{
                          p: { xs: 0.75, sm: 1 },
                          border: '2px solid #1DA1F2',
                          borderRadius: 1.5,
                          color: '#1DA1F2',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: { xs: 32, sm: 36 },
                          minHeight: { xs: 32, sm: 36 },
                          '&:hover': {
                            backgroundColor: '#1DA1F2',
                            color: 'white',
                            transform: 'scale(1.05)'
                          }
                        }}
                      >
                        <Twitter size={16} />
                      </Box>
                      <Box
                        component="a"
                        href={member.links.whatsapp}
                        sx={{
                          p: { xs: 0.75, sm: 1 },
                          border: '2px solid #25D366',
                          borderRadius: 1.5,
                          color: '#25D366',
                          textDecoration: 'none',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minWidth: { xs: 32, sm: 36 },
                          minHeight: { xs: 32, sm: 36 },
                          '&:hover': {
                            backgroundColor: '#25D366',
                            color: 'white',
                            transform: 'scale(1.05)'
                          }
                        }}
                      >
                        <MessageCircle size={16} />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Stack>

          {/* Footer Section - Compact */}
          <motion.div variants={cardVariants}>
            <Box 
              textAlign="center" 
              mt={{ xs: 3, sm: 4, md: 5 }}
              p={{ xs: 2, sm: 2.5, md: 3 }}
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: { xs: 2, sm: 2.5, md: 3 },
                backdropFilter: 'blur(10px)',
                width: '100%',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'white',
                  mb: { xs: 1, sm: 1.5 },
                  fontWeight: 'medium',
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                }}
              >
                Together, we're building the future of digital brochures
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255,255,255,0.8)',
                  maxWidth: '500px',
                  mx: 'auto',
                  fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                  lineHeight: 1.5
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