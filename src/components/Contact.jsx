import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  useTheme,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import bgImage from "../assets/contact-image.png";

const ContactPage = () => {
  const theme = useTheme();

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {/* Left Section - Form */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "#c2322b",
          color: "#fff",
          p: { xs: 4, md: 8 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" letterSpacing={1} mb={1}>
          LET’S TALK
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ lineHeight: 1.3 }}
        >
          Got an idea? Let’s get in touch!
        </Typography>

        <Typography variant="body1" mb={4}>
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
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
          <TextField
            fullWidth
            label="Email Address"
            variant="filled"
            sx={{
              mb: 2,
              backgroundColor: "#fff",
              borderRadius: 1,
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
          <TextField
            fullWidth
            label="Phone"
            variant="filled"
            sx={{
              mb: 2,
              backgroundColor: "#fff",
              borderRadius: 1,
              "& .MuiInputBase-input": { color: "#000" },
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
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              py: 1.5,
              background: "linear-gradient(180deg, #000000, #4b0000)",
              "&:hover": {
                background: "linear-gradient(180deg, #4b0000, #000000)",
              },
            }}
          >
            LET’S GET IN TOUCH
          </Button>
        </Box>
      </Grid>

      {/* Right Section - Image & Contact Info */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          position: "relative",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(31,34,44,0.95)",
            textAlign: "center",
            py: 6,
            px: 2,
          }}
        >
          <Typography variant="body1" mb={3}>
            Please submit your inquiry and our App Development Strategist will
            contact you shortly
          </Typography>
          <PhoneIcon sx={{ fontSize: 40, mb: 2 }} />
          <Typography variant="h5" fontWeight="bold">
            +1-(800) 826 8018
          </Typography>
          <Typography variant="body2" color="rgba(255,255,255,0.8)">
            info@appicoders.com
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactPage;
