import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';

const About = () => {
  return (
    <Box id="about" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#fff' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6, lg: 8 },
            alignItems: 'center',
          }}
        >
          {/* Left Section - Headline */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 60%' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              width: { xs: '100%', md: '50%' },
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem', xl: '4.5rem' },
                fontWeight: 900,
                lineHeight: 1.05,
                color: '#2C2C2C',
                mb: 0,
                fontFamily: 'sans-serif',
                letterSpacing: '-0.02em',
                textAlign: { xs: 'center', md: 'left' },
                width: '100%',
              }}
            >
              <Box component="span" sx={{ color: '#E62020' }}>
                Appicoders
              </Box>
              {' – #1. Mobile'}
              <Box component="br" />
              App & Web Development
              <Box component="br" />
              Company in USA
            </Typography>
          </Box>

          {/* Right Section - Text and Button */}
          <Box
            sx={{
              flex: { xs: '1 1 100%', md: '1 1 40%' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              justifyContent: 'center',
              width: { xs: '100%', md: '50%' },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.9rem', sm: '1rem' },
                color: '#2C2C2C',
                lineHeight: 1.6,
                mb: 4,
                textAlign: { xs: 'center', md: 'left' },
                fontWeight: 400,
                fontFamily: 'sans-serif',
                maxWidth: '100%',
              }}
            >
              Welcome to Appicoders, your trusted partner for expert mobile app and web
              development. With over 10+ years of experience, we specialize in designing,
              developing, and marketing cutting-edge solutions for all major mobile platforms,
              including Android, iOS, and Windows.
            </Typography>
            <Button
              variant="contained"
              sx={{  
                width: {'xs': '100%', 'md': '260px'},
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
                    height: {'xs': 'auto', 'md': '55px'},
                    background: 'linear-gradient(to right, #990000 0%, #E62020 100%)',
                    color: '#fff',
                    py: { xs: 1.25, md: 1.5 },
                    px: { xs: 3, md: 4 },
                    alignSelf: 'flex-start',
                    fontWeight: 600,
                    fontSize: { xs: '0.85rem', md: '1.25rem' },
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    borderRadius: '4px',
                    '&:hover': {
                      background: 'linear-gradient(to right, #880000 0%, #D62020 100%)',
                      boxShadow: '0 6px 10px rgba(0, 0, 0, 0.18)',
                    },
              }}
            >
              READ MORE
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;

