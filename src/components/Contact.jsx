import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import bgImage from "../assets/contact-image.png";

const ContactPage = () => {
  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Left Section - Form */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          backgroundColor: "#E62020",
          color: "#fff",
          p: { xs: 4, sm: 6, md: 8 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            letterSpacing: 2,
            mb: 1,
            fontSize: { xs: "0.875rem", md: "1rem" },
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          LET'S TALK
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 2,
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.5rem", lg: "3rem" },
            lineHeight: 1.2,
          }}
        >
          Got an idea? Let's get in touch!
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            fontSize: { xs: "0.9rem", md: "1rem" },
            lineHeight: 1.6,
            color: "rgba(255, 255, 255, 0.95)",
          }}
        >
          Have queries? Not sure of your App Strategy? Discuss with us and
          we'll guide you the way forward.
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Your Name"
            variant="filled"
            sx={{
              mb: 2,
              backgroundColor: "#fff",
              borderRadius: 1,
              "& .MuiFilledInput-root": {
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: "#fff",
                },
                "&.Mui-focused": {
                  backgroundColor: "#fff",
                },
              },
              "& .MuiInputBase-input": {
                color: "#333",
              },
              "& .MuiInputLabel-root": {
                color: "#666",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#666",
              },
            }}
          />
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="filled"
            sx={{
              mb: 2,
              backgroundColor: "#fff",
              borderRadius: 1,
              "& .MuiFilledInput-root": {
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: "#fff",
                },
                "&.Mui-focused": {
                  backgroundColor: "#fff",
                },
              },
              "& .MuiInputBase-input": {
                color: "#333",
              },
              "& .MuiInputLabel-root": {
                color: "#666",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#666",
              },
            }}
          />
          <TextField
            fullWidth
            label="Phone"
            type="tel"
            variant="filled"
            sx={{
              mb: 2,
              backgroundColor: "#fff",
              borderRadius: 1,
              "& .MuiFilledInput-root": {
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: "#fff",
                },
                "&.Mui-focused": {
                  backgroundColor: "#fff",
                },
              },
              "& .MuiInputBase-input": {
                color: "#333",
              },
              "& .MuiInputLabel-root": {
                color: "#666",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#666",
              },
            }}
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="filled"
            sx={{
              mb: 3,
              backgroundColor: "#fff",
              borderRadius: 1,
              "& .MuiFilledInput-root": {
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: "#fff",
                },
                "&.Mui-focused": {
                  backgroundColor: "#fff",
                },
              },
              "& .MuiInputBase-input": {
                color: "#333",
              },
              "& .MuiInputLabel-root": {
                color: "#666",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#666",
              },
            }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              py: 1.75,
              fontSize: { xs: "0.875rem", md: "1rem" },
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              background: "linear-gradient(180deg, #6D0407 0%, #5b0000 100%)", 
              color: "#fff",
              borderColor: '#d32f2f',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              borderWidth: 2,
              borderRadius: 1,
              "&:hover": {
                borderColor: '#d32f2f',
                borderWidth: 2,
                background: "linear-gradient(180deg, #1a0000 0%, #5b0000 100%)",
              },
            }}
          >
            LET'S GET IN TOUCH
          </Button>
        </Box>
      </Box>

      {/* Right Section - Image & Contact Info */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          minHeight: { xs: "50vh", md: "100vh" },
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            // backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: { xs: "300px", md: "50%" },
          }}
        />

        {/* Contact Info Section */}
        <Box
          sx={{
            backgroundColor: "#1F222C",
            textAlign: "center",
            py: { xs: 5, md: 6 },
            px: { xs: 3, md: 4 },
            position: "relative",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontSize: { xs: "0.875rem", md: "1rem" },
              lineHeight: 1.6,
              color: "#fff",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Please submit your inquiry and our App Development Strategist will
            contact you shortly
          </Typography>
          <PhoneIcon
            sx={{
              fontSize: { xs: 48, md: 56 },
              mb: 2,
              color: "#fff",
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              color: "#fff",
            }}
          >
            +1-(800) 826 8018
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.875rem", md: "1rem" },
              color: "rgba(255, 255, 255, 0.8)",
            }}
          >
            info@appicoders.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
