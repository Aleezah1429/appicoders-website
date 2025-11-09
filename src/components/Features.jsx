import React, { useRef } from 'react';
import { Box, Container, Typography, Grid, Button, Chip, IconButton } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WebIcon from '@mui/icons-material/Web';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import serviceBg from '../assets/service-bg.png';
import serviceImage from '../assets/service.png';
import mobileMockup from '../assets/service-item.png';
import carouselBg from '../assets/service-carousal-bg.png';
import appleBtn from '../assets/appleBtn.png';
import googleBtn from '../assets/googleBtn.png';

// Import Slick Carousel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Features = () => {
  const carouselRef = useRef(null);
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

  // Case studies for the carousel
  const caseStudies = [
    {
      id: 1,
      title: 'Caviar - Order Food Delivery',
      description: 'Get Food delivered from curated lists of local restaurants right at your fingertips with Caviar. Enjoy quality dining at home and make any night a special occasion.',
      images: [mobileMockup, mobileMockup, mobileMockup], // Multiple screenshots for vertical carousel
      tags: ['iOS Development', 'Android Development', 'UI/UX Design'],
      caseStudyLink: '#'
    }
  ];

  // Vertical carousel settings for phone screenshots
  const verticalSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: false,
    centerMode: false,
    focusOnSelect: false,
  };

  // Handle vertical carousel navigation
  const handleUp = () => {
    if (carouselRef.current) {
      carouselRef.current.slickPrev();
    }
  };

  const handleDown = () => {
    if (carouselRef.current) {
      carouselRef.current.slickNext();
    }
  };

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
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: { xs: 2, md: 4 },
                  width: '100%',
                }}
              >
                {services.map((service, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      width: { xs: '100%', md: 'calc((100% - 32px) / 2)' },
                      flex: { xs: '1 1 100%', md: '1 1 calc((100% - 32px) / 2)' },
                      minWidth: 0,
                      maxWidth: { xs: '100%', md: 'calc((100% - 32px) / 2)' },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 2,
                        alignItems: 'flex-start',
                        width: '100%',
                        minWidth: 0,
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
                      <Box sx={{ flex: 1, minWidth: 0 }}>
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
                  </Box>
                ))}
              </Box>
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
      {/* Project Showcase Carousel */}
      <Box
        sx={{
          position: 'relative',
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          marginTop: { xs: '-68%', md: '-12%' },
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${carouselBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(8px)',
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1,
          }
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 3, md: 4 } }}>
          {caseStudies.map((study) => (
            <Box
              key={study.id}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: { xs: 3, md: 4, lg: 6 },
                width: '100%',
              }}
            >
              {/* Left Side - Content */}
              <Box
                sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  width: { xs: '100%', md: '50%' },
                  flex: { xs: '1 1 100%', md: '1 1 50%' },
                  px: { xs: 2, sm: 3, md: 2, lg: 4 },
                  py: { xs: 4, md: 0 },
                }}
              >
                <Box sx={{ mb: { xs: 2, md: 3 }, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {study.tags.map((tag, index) => (
                    <Chip 
                      key={index}
                      label={tag}
                      size="small"
                      sx={{
                        backgroundColor: '#FFFFFF',
                        color: '#E01923',
                        borderRadius: '6px',
                        fontSize: { xs: '0.7rem', sm: '0.75rem' },
                        fontWeight: 700,
                        px: 1,
                        py: 0.5,
                        height: '40px'
                      }}
                    />
                  ))}
                </Box>
                
                <Typography 
                  variant="h2" 
                  component="h2"
                  sx={{ 
                    fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem', lg: '3.5rem' },
                    fontWeight: 700,
                    mb: { xs: 2, md: 3 },
                    color: '#ffffff',
                    lineHeight: 1.2,
                  }}
                >
                  {study.title}
                </Typography>
                
                <Typography 
                  variant="body1"
                  sx={{ 
                    color: '#ffffff',
                    mb: { xs: 3, md: 4 },
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.125rem' },
                    lineHeight: 1.7,
                    maxWidth: { xs: '100%', md: '90%' },
                    fontWeight: 600,  
                  }}
                >
                  {study.description}
                </Typography>
                
                <Box sx={{ 
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  mb: { xs: 3, md: 4 }
                }}>
                  <Box 
                    component="a"
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      display: 'block',
                      maxWidth: { xs: '140px', sm: '160px', md: '180px' },
                      '& img': {
                        width: '100%',
                        height: 'auto',
                      }
                    }}
                  >
                    <img 
                      src={appleBtn} 
                      alt="Download on App Store" 
                    />
                  </Box>
                  
                  <Box 
                    component="a"
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      display: 'block',
                      maxWidth: { xs: '140px', sm: '160px', md: '180px' },
                      '& img': {
                        width: '100%',
                        height: 'auto',
                      }
                    }}
                  >
                    <img 
                      src={googleBtn} 
                      alt="Get it on Google Play" 
                    />
                  </Box>
                </Box>
                
                <Button 
                  variant="contained" 
                  href={study.caseStudyLink}
                  sx={{ 
                    width: {'xs': '100%', 'md': '330px'},
                    height: {'xs': '50px', 'md': '65px'},
                    background: 'linear-gradient(to right, #990000 0%, #E62020 100%)',
                    color: '#fff',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
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
                  VIEW CASE STUDY
                </Button>
              </Box>
              
              {/* Right Side - Vertical Carousel with Arrows */}
              <Box
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: { xs: 1.5, md: 2 },
                  position: 'relative',
                  width: { xs: '100%', md: '50%' },
                  flex: { xs: '1 1 100%', md: '1 1 50%' },
                  px: { xs: 2, sm: 3, md: 2, lg: 4 },
                  py: { xs: 2, md: 0 },
                }}
              >
                {/* Vertical Navigation Arrows */}
                <Box sx={{ 
                  display: { xs: 'flex', md: 'flex' },
                  flexDirection: 'column',
                  gap: { xs: 1.5, md: 2 },
                  alignItems: 'center',
                  zIndex: 3,
                }}>
                  <IconButton 
                    onClick={handleUp}
                    sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.15)', 
                      color: '#fff',
                      width: { xs: 40, md: 48 },
                      height: { xs: 40, md: 48 },
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.25)'
                      }
                    }}
                  >
                    <ArrowUpwardIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                  </IconButton>
                  
                  <IconButton 
                    onClick={handleDown}
                    sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.15)', 
                      color: '#fff',
                      width: { xs: 40, md: 48 },
                      height: { xs: 40, md: 48 },
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.25)'
                      }
                    }}
                  >
                    <ArrowDownwardIcon sx={{ fontSize: { xs: 20, md: 24 } }} />
                  </IconButton>
                </Box>
                
                {/* Vertical Carousel */}
                <Box sx={{ 
                  width: '100%',
                  maxWidth: { xs: '220px', sm: '250px', md: '300px', lg: '350px' },
                  height: { xs: '200px', sm: '250px', md: '350px', lg: '400px' },
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '10px',
                  boxShadow: '0 10px 24px rgba(0, 0, 0, 0.25)',
                  '& .slick-slider': {
                    height: '100%',
                    width: '100%',
                  },
                  '& .slick-list': {
                    height: '100% !important',
                    overflow: 'hidden !important',
                  },
                  '& .slick-track': {
                    height: 'auto !important',
                    display: 'flex !important',
                    flexDirection: 'column !important',
                  },
                  '& .slick-slide': {
                    height: { xs: '400px !important', sm: '450px !important', md: '550px !important', lg: '600px !important' },
                    minHeight: { xs: '400px !important', sm: '450px !important', md: '550px !important', lg: '600px !important' },
                    maxHeight: { xs: '400px !important', sm: '450px !important', md: '550px !important', lg: '600px !important' },
                    '& > div': {
                      height: '100% !important',
                    }
                  }
                }}>
                  <Slider ref={carouselRef} {...verticalSliderSettings}>
                    {study.images.map((image, index) => (
                      <Box key={index} sx={{ 
                        display: 'flex !important',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: { xs: '200px', sm: '250px', md: '350px', lg: '400px' },
                        width: '100% !important',
                        px: { xs: 1, md: 2 },
                        outline: 'none',
                        backgroundColor: 'transparent',
                        borderRadius: '5px',
                        padding: '5px',
                        margin: '5px 0',
                        '&:hover': {
                          transform: 'scale(1.02)',
                          transition: 'transform 0.3s ease-in-out',
                        },
                        '&:not(:hover)': {
                          transform: 'scale(1)',
                          transition: 'transform 0.3s ease-in-out',
                        },
                      }}>
                        <Box 
                          component="img"
                          src={image}
                          alt={`${study.title} - Screenshot ${index + 1}`}
                          sx={{ 
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))',
                          }}
                        />
                      </Box>
                    ))}
                  </Slider>
                </Box>
              </Box>
            </Box>
          ))}
        </Container>
      </Box>
    </Box>
  );
};

export default Features;