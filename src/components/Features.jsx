import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WebIcon from '@mui/icons-material/Web';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import serviceBg from '../assets/service-bg.png';
import serviceImage from '../assets/service.png';

const Features = () => {
  const services = [
    {
      icon: <PhoneAndroidIcon sx={{ fontSize: 24, color: '#E62020' }} />,
      title: 'Custom Mobile Applications',
      description: 'iOS, Android and Wearable Apps',
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 24, color: '#E62020' }} />,
      title: 'Artificial Intelligence',
      description: 'Innovative AI & ML Solutions',
    },
    {
      icon: <WebIcon sx={{ fontSize: 24, color: '#E62020' }} />,
      title: 'Custom Web Development',
      description: 'Robust Webs, Progressive Web Apps',
    },
    {
      icon: <AccountTreeIcon sx={{ fontSize: 24, color: '#E62020' }} />,
      title: 'Blockchain Development',
      description: 'Custom Blockchain Solutions',
    },
    {
      icon: <ViewInArIcon sx={{ fontSize: 24, color: '#E62020' }} />,
      title: 'Augmented Reality',
      description: 'Futuristic AR Apps',
    },
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 24, color: '#E62020' }} />,
      title: 'MVP Development',
      description: 'For Startups & Entrepreneurs',
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          backgroundImage: `url(${serviceBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat', 
          color: '#fff',
          pt: { xs: '30%', md: '19%' },
          pb: { xs: '60%', md: '30%' },
          minHeight: { xs: 'auto', md: '600px' },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            px: { xs: 2, md: 4 },
            zIndex: 10,
          }}
        >
          <Box
            sx={{
              pt: { xs: 2, sm: 4 },
              py: { xs: 4, md: 8 },
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              alignItems: { xs: 'center', lg: 'flex-start' },
              justifyContent: 'space-between',
              px: { xs: 3, md: 6 },
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', lg: '50%' },
                mb: { xs: 4, lg: 0 },
              }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '3.75rem' },
                  fontWeight: 800,
                  mb: 2,
                  color: '#fff',
                }}
              >
                Our Services
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  mb: { xs: 6, md: 12 },
                  color: '#fff',
                }}
              >
                Get to know about what we're good at.
              </Typography>
              <Grid container spacing={{ xs: 2, md: 4 }}>
                {services.map((service, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 2,
                        alignItems: 'flex-start',
                      }}
                    >
                      <Box
                        sx={{
                          flexShrink: 0,
                          p: 1.5,
                          borderRadius: '50%',
                          backgroundColor: '#fff',
                          color: '#E62020',
                          mt: 0.5,
                          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 48,
                          height: 48,
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            fontWeight: 700,
                            mb: 0.5,
                            color: '#fff',
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: { xs: '0.875rem', md: '0.9rem' },
                            color: 'rgba(255, 255, 255, 0.8)',
                          }}
                        >
                          {service.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box
              sx={{
                width: { xs: '100%', lg: '50%' },
                height: { xs: 0, lg: 256 },
                display: { xs: 'none', lg: 'block' },
              }}
            />
          </Box>
        </Container>
        <Box
          sx={{
            position: 'absolute',
            right: 2,
            top: '12%',
            zIndex: 20,
            display: { xs: 'none', lg: 'block' },
            transform: 'translate(10%, 10%)',
          }}
        >
          <Box
            component="img"
            src={serviceImage}
            alt="Development Illustration"
            sx={{
              height: 'auto',
              maxWidth: { lg: '500px', xl: '600px' },
              objectFit: 'contain',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Features;

