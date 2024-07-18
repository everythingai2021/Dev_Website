import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import SponsorImage1 from "../assets/castle.jpeg";
import SponsorImage2 from "../assets/ericsson.png";
import SponsorImage3 from "../assets/nokia.png";
import SponsorImage4 from "../assets/t-mobile.png";
import SponsorImage5 from "../assets/OIP.jpeg";
import SponsorImage6 from "../assets/cox.jpeg";
import SponsorImage7 from "../assets/OIP (1).jpeg";

const Sponsors: React.FC = () => {
  const sponsorImages = [
    SponsorImage1,
    SponsorImage2,
    SponsorImage3,
    SponsorImage4,
    SponsorImage5,
    SponsorImage6,
    SponsorImage7,
  ];

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
              sx={{ fontWeight: "bold", color: "#1976d2", textAlign: 'center' }}
            >
            Our Sponsor
            </Typography>

      </Box>
      <Grid container spacing={2} justifyContent="center">
        {sponsorImages.map((image, index) => (
          <Grid item xs={1} key={index}>
            <Box
              component="img"
              src={image}
              alt={`Sponsor ${index + 1}`}
              sx={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "1px solid #ccc",
                boxShadow: 3,
                backgroundColor: "#ffffff",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Sponsors;
