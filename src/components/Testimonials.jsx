import React from 'react';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Slider from 'react-slick';
import bgImage from '../assets/testimonial-bg.png';  
import client1 from '../assets/client1.png';  

const testimonials = [
  {
    name: 'Scarlett Lawrence',
    feedback:
      "Thank you Team Appingine you guys have a great understanding of what's current, and get things done very quickly compared to others. Reliable communication and qualitative suggestions on useful functionality during the planning stage made for a final product that surpassed initial expectations. Their project management is amazing, tight deadlines were reliably met without issue. Our strong recommendations if you’re looking for quality work.",
    image: client1,
  },
  {
    name: 'John Doe',
    feedback:
      'The experience with the team was exceptional! They were always responsive and provided valuable insights that helped us build our product faster and better than we imagined.',
    image: client1,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    appendDots: dots => (
      <Box sx={{ textAlign: 'right', pr: { xs: 0, md: 4 }, mt: { xs: 2, md: 0 } }}>
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
          mt: { xs: '-100%', md: '-140%' },
        }}
      />
    ),
  };

  return (
    <Box
      id="testimonials"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '100vh' },
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 8 },
      }}
    >
      {/* Gradient Container with #E01923 */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(to right, rgba(224, 25, 35, 0.9), rgba(224, 25, 35, 0.7))',
          borderRadius: { xs: '4px', md: '8px' },
          py: { xs: 4, md: 8 },
          px: { xs: 2, sm: 3, md: 6 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'center',
          gap: { xs: 4, md: 6 },
          color: 'white', 
        }}
      >
        {/* Left Text Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '40%' },
            pr: { md: 4 },
            mb: { xs: 4, md: 0 },
            zIndex: 2,
          }}
        >
          <FormatQuoteIcon
            sx={{ 
              fontSize: { xs: 60, sm: 80, md: 100 },
              bgcolor: 'white',
              color: '#E01923',
              borderRadius: '50%',
              p: { xs: 0.8, md: 1 },
              mb: 2,
              transform: 'rotate(180deg)',
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{
              opacity: 0.8,
              fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
            }}
          >
            CLIENT TESTIMONIALS
          </Typography>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              mt: 1,
              lineHeight: 1.3,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            What our clients <br /> are Saying.
          </Typography>
        </Box>

        {/* Right Testimonial Card Slider */}
        <Box
          sx={{
            width: { xs: '100%', md: '60%' },
            maxWidth: { xs: '100%', md: 700 },
            zIndex: 2, 
          }}
        >
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <Card
                key={index}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  color: 'black',
                  p: { xs: 2, sm: 3, md: 4 },
                  boxShadow: 6,
                  minHeight: { xs: 'auto', md: 400 },
                  display: 'flex',
                  flexDirection: 'column',
                  mx: { xs: 0, sm: 1 },
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    p: { xs: '8px !important', md: '16px !important' },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      mb: 2,
                      gap: { xs: 1.5, sm: 2 },
                    }}
                  >
                    <Avatar
                      src={item.image}
                      sx={{
                        width: { xs: 80, sm: 100, md: 120 },
                        height: { xs: 80, sm: 100, md: 120 },
                        mr: { xs: 0, sm: 2 },
                      }}
                    />
                    <Box sx={{ width: '100%' }}>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Box
                        sx={{
                          width: 40,
                          height: 3,
                          bgcolor: '#E01923',
                          borderRadius: '5px',
                          mt: 0.5,
                        }}
                      />
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#E01923',
                      borderRadius: '50%',
                      p: { xs: 0.5, md: 1 },
                      width: { xs: 25, md: 30 },
                      height: { xs: 25, md: 30 },
                      marginTop: { xs: '-5%', md: '-7%' },
                      zIndex: 1000,
                      marginLeft: { xs: '5px', md: '10px' },
                      alignSelf: 'flex-start',
                    }}
                  >
                    <FormatQuoteIcon
                      sx={{
                        fontSize: { xs: 16, md: 20 },
                        color: '#fff',
                        transform: 'rotate(180deg)',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    color="text.primary"
                    sx={{
                      flexGrow: 1,
                      marginTop: { xs: '8px', md: '12px' },
                      fontSize: { xs: '0.875rem', sm: '0.9375rem', md: '1rem' },
                      lineHeight: { xs: 1.6, md: 1.75 },
                    }}
                  >
                    {item.feedback}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
