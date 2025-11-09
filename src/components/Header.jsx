import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import logoImage from '../assets/Logo-Final-White.png';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  };

  const navItems = [
    { label: 'HOME', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Choose Us', id: 'why-choose-us' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Products', id: 'products' },
    { label: 'Testimonial', id: 'testimonial' },
    { label: 'Technologies', id: 'technologies' },
    { label: 'Contact', id: 'contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#d32f2f', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Box component="img" src={logoImage} alt="Appicoders Logo" sx={{ height: 40 }} />
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#fff' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center', color: '#fff' }}
              onClick={() => scrollToSection(item.id)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            href="tel:+18008268018"
            sx={{
              borderColor: '#fff',
              borderWidth: 1,
              color: '#fff',
              textTransform: 'none',
              fontWeight: 600,
              py: 1,
              px: 3,
              borderRadius: '50px',
              fontSize: '0.875rem',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s',
              '&:hover': {
                borderColor: '#fff',
                borderWidth: 1,
                backgroundColor: '#fff',
                color: '#d32f2f',
              },
              textAlign: 'center',
            }}
          >
            <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
            <ListItemText primary="+(1) 800-826-8018" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? '#20222D' : 'transparent',
          color: '#fff',
          boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.3)' : 'none',
          py: 1,
          transition: 'all 0.3s ease-in-out',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            px: { xs: 2, md: 4, lg: 6 },
            maxWidth: '1400px',
            mx: 'auto',
            width: '100%',
            flexDirection: { xs: 'row', md: 'row' },
            alignItems: 'center',
          }}
        >
          <Box component="img" src={logoImage} alt="Appicoders Logo" sx={{ height: { xs: 35, md: 45 } }} />
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#fff' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 1,
              }}
            >
              {/* Navigation Items Row */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      color: '#fff',
                      textTransform: 'none',
                      fontWeight: item.label === 'HOME' ? 700 : 400,
                      fontSize: '0.875rem',
                      px: 1.5,
                      minWidth: 'auto',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
              {/* Phone Button Below Nav Items */}
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button
                  variant="outlined"
                  startIcon={<PhoneIcon />}
                  href="tel:+18008268018"
                  sx={{
                    borderColor: '#fff',
                    borderWidth: 1,
                    color: '#fff',
                    textTransform: 'none',
                    fontWeight: 600,
                    py: 1,
                    px: 3,
                    borderRadius: '50px',
                    fontSize: '0.875rem',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: '#fff',
                      borderWidth: 1,
                      backgroundColor: '#fff',
                      color: '#d32f2f',
                    },
                  }}
                >
                  +(1) 800-826-8018
                </Button>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
