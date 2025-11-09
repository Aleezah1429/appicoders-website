import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import cloudImg from '../assets/cloud-image.png';
import techBg from '../assets/technology-bg.png';

const Technologies = () => {
  const techSlides = [
    {
      title: 'Cloud Solutions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu du.',
      image: cloudImg,
    },
    {
      title: 'AI & Machine Learning',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu du.',
      image: cloudImg,
    },
    {
      title: 'Data Analytics',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu du.',
      image: cloudImg,
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    appendDots: dots => (
      <Box sx={{ mt: { xs: 2, md: 3 }, textAlign: 'center' }}>
        <ul style={{ margin: 0, padding: 0 }}> {dots} </ul>
      </Box>
    ),
    customPaging: i => (
      <Box
        sx={{
          width: i === 0 ? { xs: 20, md: 25 } : { xs: 12, md: 15 },
          height: { xs: 4, md: 5 },
          borderRadius: '5px',
          bgcolor: i === 0 ? '#E01923' : '#f5b5b5',
          mx: 0.5,
          marginTop: { xs: '-100%', md: '-140%' }, 
        }}
      />
    ),
  };

  return (
    <Box
      id="technologies"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '100vh' },
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${techBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 10 },
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        sx={{
          mb: { xs: 4, md: 8 },
          textAlign: 'center',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        }}
      >
        Technologies
      </Typography>

      {/* Two Column Layout */}
      <Box 
        sx={{ 
          width: '100%', 
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 3},
          alignItems: 'stretch',
        }}
      >
        {/* Left Column - White Card Slider */}
        <Box 
          sx={{ 
            width: { xs: '100%', md: '50%' },
            flex: { xs: '0 0 auto', md: '0 0 50%' },
            display: 'flex',
            flexDirection: 'column',
            '& .slick-slide': {
              '& > div': {
                width: '100%',
              }
            },
            '& .slick-list': {
              width: '100%',
            },
            '& .slick-track': {
              width: '100%',
            }
          }}
        >
          <Slider {...settings}>
            {techSlides.map((slide, index) => (
              <Box key={index} sx={{ width: '100%', outline: 'none' }}>
                <Card
                  sx={{
                    borderRadius: '10px',
                    boxShadow: 5,
                    backgroundColor: 'white',
                    color: 'black',
                    p: { xs: 3, sm: 4, md: 4 },
                    width: '100%',
                    height: { xs: 'auto', md: 400 },
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: { xs: '16px !important', md: '24px !important' } }}>
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      gutterBottom
                      sx={{
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                        mb: { xs: 2, md: 3 },
                      }}
                    >
                      {slide.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        mb: 'auto',
                        fontSize: { xs: '0.875rem', sm: '1rem', md: '1rem' },
                        lineHeight: { xs: 1.6, md: 1.75 },
                      }}
                    >
                      {slide.description}
                    </Typography> 
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>

        {/* Right Column - Static Cloud Image */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            flex: { xs: '0 0 auto', md: '0 0 50%' },
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: { xs: 0, md: 2 },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: 300, sm: 350, md: 400 },
              borderRadius: '10px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
              boxShadow: 5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <Box
              component="img"
              src={cloudImg}
              alt="Cloud Solutions"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.9,
              }}
            />
            {/* Overlay for dark blue effect */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.8) 0%, rgba(40, 53, 147, 0.7) 50%, rgba(57, 73, 171, 0.6) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Technologies;
