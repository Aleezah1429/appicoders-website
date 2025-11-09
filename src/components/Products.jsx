import React, { useState } from 'react';
import { Grid, Card, Box, Tabs, Tab, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import productBg from '../assets/product-bg.jpg';
import laptopImg from '../assets/Laptop.png';
import ipadImg from '../assets/ipad.png';
import mobileImg from '../assets/Mobile.png';
import ipad2Img from '../assets/ipad-2.png';
import laptop2Img from '../assets/laptop-2.png';

// Custom Styled Components for Card
const CustomCard = styled(Card)(({ theme }) => ({
  borderRadius: 8,
  backgroundColor: 'white',
  boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  zIndex: 1,
  '&:hover': {
    boxShadow: '0px 8px 16px rgba(0,0,0,0.2)',
    transform: 'translateY(-4px)',
    transition: 'all 0.3s ease-in-out',
  },
}));

// Custom Styled Tabs
const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '& .MuiTab-root': {
    color: 'white',
    fontWeight: 700,
    textTransform: 'none',
    minHeight: 'auto',
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
      padding: '8px 12px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
      padding: '12px 20px',
    },
    '&.Mui-selected': {
      color: 'white',
      fontWeight: 600,
      textDecoration: 'underline',
      textDecorationThickness: '2px',
      textUnderlineOffset: '4px',
      [theme.breakpoints.down('md')]: {
        fontSize: '16px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '24px',
      },
    },
    '&:hover': {
      color: 'rgba(255, 255, 255, 0.8)',
    },
  },
}));

const Product = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const products = [
    { title: 'Health Supreme', imageUrl: laptopImg },
    { title: 'CRM 365', imageUrl: ipadImg },
    { title: 'OSDA', imageUrl: mobileImg },
    { title: 'Marketplace E-Commerce Platform', imageUrl: ipad2Img },
    { title: 'Sports Training App', imageUrl: mobileImg },
    { title: 'Fitness', imageUrl: laptop2Img },
  ];

  const filteredProducts = selectedTab === 0 ? products : products.filter((_, index) => index === selectedTab - 1);

  // Debug: Log filtered products
  console.log('Filtered products:', filteredProducts);
  console.log('Selected tab:', selectedTab);

  return (
    <Box
      id="products"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '100vh' },
        backgroundImage: `url(${productBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#E01923', // Red fallback color
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        color: 'white',
      }}
    >
      <Container 
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Section Title */}
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            mb: { xs: 4, md: 6 },
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          Products
        </Typography>

        {/* Tabs for Filtering */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 4, md: 6 } }}>
          <StyledTabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTabs-scrollButtons': {
                color: 'white',
              }, 
            }}
          >
            <Tab label="ALL" />
            <Tab label="Health Supreme" />
            <Tab label="CRM 365" />
            <Tab label="OSDA" />
            <Tab label="Marketplace E-Commerce Platform" />
            <Tab label="Sports Training App" />
            <Tab label="Fitness" />
          </StyledTabs>
        </Box>

        {/* Products Grid - 3 columns on large screens, 2 on medium, 1 on small */}
        {filteredProducts.length > 0 ? (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, minmax(0, 1fr))',
                md: 'repeat(3, minmax(0, 1fr))',
              },
              gap: { xs: 2, sm: 3, md: 4 },
              alignItems: 'stretch',
            }}
          >
            {filteredProducts.map((product, index) => (
              <Box key={index} sx={{ width: '100%' }}>
                <CustomCard>
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: '250px', sm: '300px', md: '350px' },
                      backgroundColor: '#f5f5f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: { xs: 1, sm: 2, md: 3 },
                    }}
                  >
                    <Box
                      component="img"
                      src={product.imageUrl}
                      alt={product.title}
                      onError={(e) => {
                        console.error('Image failed to load:', product.imageUrl);
                      }}
                      sx={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                </CustomCard>
              </Box>
            ))}
          </Box>
        ) : (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h6" color="white">
              No products found
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Product;
