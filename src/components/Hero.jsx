import React from 'react';
import { Box, Typography, Button, Container, IconButton, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import bgImage from '../assets/Bg.jpg';
import mobileMockup from '../assets/Mobile-Mockup.png';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        pt: { xs: 10, md: 14 },
        pb: { xs: 6, md: 10 },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            gap: { xs: 4, lg: 6 },
          }}
        >
          {/* Left Column - Mobile Mockups */}
          <Box
            sx={{
              flex: 1,
              position: 'relative',
              display: 'flex',
              justifyContent: { xs: 'center', lg: 'flex-start' },
              alignItems: 'center',
              minHeight: { xs: '300px', md: '500px' },
            }}
          >
            {/* Back phone (shadowed) */}
            <Box
              component="img"
              src={mobileMockup}
              alt="Mobile Mockup Background"
              sx={{
                position: 'absolute',
                left: { xs: '20px', md: '40px' },
                top: { xs: '50px', md: '60px' },
                width: { xs: '200px', sm: '250px', md: '280px', lg: '300px' },
                height: 'auto',
                transform: 'rotate(-7deg)',
                opacity: 0.7,
                filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.4))',
                zIndex: 1,
              }}
            />

            {/* Front phone */}
            <Box
              component="img"
              src={mobileMockup}
              alt="Mobile Mockup Foreground"
              sx={{
                position: 'relative',
                width: { xs: '230px', sm: '280px', md: '320px', lg: '360px' },
                height: 'auto',
                zIndex: 2,
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.4))',
              }}
            />
          </Box>

          {/* Right Column - Text Content */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: 'center', lg: 'left' },
              pl: { lg: 4 },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                lineHeight: 1.2,
                mb: 3,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                letterSpacing: '0.5px',
                color: '#fff',
              }}
            >
              Leading the Way in App Development Innovation
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: '#fff',
                opacity: 0.95,
                lineHeight: 1.8,
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.125rem' },
                maxWidth: { lg: '90%' },
              }}
            >
              We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.
            </Typography>

            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#d32f2f',
                borderWidth: 2,
                color: '#fff',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                textTransform: 'uppercase',
                borderRadius: '5px',
                backgroundColor: '#6D0407',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                '&:hover': {
                  borderColor: '#d32f2f',
                  borderWidth: 2,
                  backgroundColor: 'rgba(211, 47, 47, 0.1)',
                },
              }}
            >
              GET A FREE QUOTE
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Navigation Arrows */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '20%', 
          display: {xs: 'none', md: 'flex'},
          gap: 1.5,
          zIndex: 3,
        }}
      >
        <IconButton
          sx={{
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid rgba(255,255,255,0.4)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.25)',
            },
          }}
        >
          <ArrowBackIcon fontSize="small" />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid rgba(255,255,255,0.4)',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.25)',
            },
          }}
        >
          <ArrowForwardIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Hero;
