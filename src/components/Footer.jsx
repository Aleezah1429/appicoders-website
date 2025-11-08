import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material"; 
import logo from "../assets/Logo.png"; 
import fbLogo from "../assets/fb.png";
import twitterLogo from "../assets/twitter.png";
import linkedinLogo from "../assets/linkedIn.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1f222c",
        color: "#fff",
        py: 6,
        px: { xs: 4, md: 10 },
      }}
    >
      <Grid container spacing={6} justifyContent="space-between">
        {/* Left Section - Logo and Contact */}
        <Grid item xs={12} md={4}>
          <Box>
            <Box
              component="img"
              src={logo}
              alt="Appicoders Logo"
              sx={{ height: 70, mb: 2 }}
            />
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="gray" fontWeight={700}>
              Tel: +1 (800) 826-8018
            </Typography>
            <Typography variant="body2" mb={2} color="gray" fontWeight={700}>
              Email: info@appicoders.com
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box
                component="img"
                src={fbLogo}
                alt="Appicoders Logo"
                sx={{ height: 25, width: 25 }}
              />
              <Box
                component="img"
                src={twitterLogo}
                alt="Appicoders Logo"
                sx={{ height: 25, width: 25 }}
              />
              <Box
                component="img"
                src={linkedinLogo}
                alt="Appicoders Logo"
                sx={{ height: 25, width: 25 }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Middle Section - About */}
        <Grid item xs={12} md={3}>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            About
          </Typography>
          <Box sx={{ marginTop: 5 }}>
            <Link href="#" color="gray" underline="none" display="block" mb={1} fontWeight={700}>
              HOME
            </Link>
            <Link href="#" color="gray" underline="none" display="block" mb={1} fontWeight={700}>
              ABOUT US
            </Link>
            <Link href="#" color="gray" underline="none" display="block" fontWeight={700}>
              CONTACT US
            </Link>
          </Box>
        </Grid>

        {/* Right Section - Services */}
        <Grid item xs={12} md={4}>
          <Typography variant="h4" fontWeight={600} gutterBottom>
            Appicoders Services
          </Typography>
          <Box sx={{ marginTop: 5 }}>
            <Typography variant="body2" mb={1} color="gray" fontWeight={700}>
             <span style={{ color: 'white', fontSize: '18px' }}> » </span> iPHONE APPLICATION DEVELOPMENT
            </Typography>
            <Typography variant="body2" mb={1} color="gray" fontWeight={700}>
              <span style={{ color: 'white', fontSize: '18px' }}> » </span> ANDROID APPLICATION DEVELOPMENT
            </Typography>
            <Typography variant="body2" color="gray" fontWeight={700}>
              <span style={{ color: 'white', fontSize: '18px' }}> » </span> ENTERPRISE APP DEVELOPMENT
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Copyright */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          mt: 6,
          pt: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="rgba(255,255,255,0.8)">
          © 2025 APPICODERS. ALL RIGHTS RESERVED.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
