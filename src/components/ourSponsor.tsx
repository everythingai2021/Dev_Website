import React from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import SponsorImage1 from "../assets/social.png";
import SponsorImage2 from "../assets/canada.png";
import SponsorImage3 from "../assets/unsplash.jpeg";


const Sponsors: React.FC = () => {
  const sponsorImages = [
    SponsorImage1,
    SponsorImage2,
    SponsorImage3,
   
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen is mobile

  return (
    <Box sx={{ mt: 5, py: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#0097B2", textAlign: 'center' }}
        >
          Our Sponsors
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center">
        {sponsorImages.map((image, index) => (
          <Grid item xs={isMobile ? 3 : 2} key={index}>
            <Box
              component="img"
              src={image}
              alt={`Sponsor ${index + 1}`}
              sx={{
                width: isMobile ? "60px" : "100px",
                height: isMobile ? "60px" : "100px",
                borderRadius: "20%",
                padding:"20px",
                border: "1px solid #ccc",
                boxShadow: 3,
                backgroundColor: "#ffffff",
                objectFit: 'contain', // Prevent distortion of images
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Sponsors;
