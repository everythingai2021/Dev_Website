import React from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ServiceImage1 from "../assets/imageframe3.jpg";


const services = [
  
  {
    title: "Service 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: ServiceImage1,
    link: "/service3",
  },
  {
    title: "Service 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: ServiceImage1,
    link: "/service4",
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      mb: 5,
    }}
  >
    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
      What We Do
    </Typography>
    <Box
      sx={{
        width: '180px',
        height: '4px',
        bgcolor: '#77B3DF',
        borderRadius: 2,
      }}
    />
  </Box>
  <Grid container spacing={2}>
    {services.map((service, index) => (
      <Grid key={index} item xs={12} sm={6} md={6} lg={6}> {/* Adjusted grid item size */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 3,
            borderRadius: 2,
            p: 2,
            bgcolor: 'background.paper',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <img
            src={service.image}
            alt={service.title}
            style={{ width: '100%', borderRadius: 2 }}
          />
          <Box sx={{ width: '100%', mt: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {service.title}
            </Typography>
            <Typography variant="body2" paragraph>
              {service.description}
            </Typography>
            <Button
              component={RouterLink}
              to={service.link}
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                bgcolor: '#F0AD01',
                '&:hover': { bgcolor: '#388e3c' },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Grid>
    ))}
  </Grid>
</Container>


  );
};

export default WhatWeDo;