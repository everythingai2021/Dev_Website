import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Button, Container } from "@mui/material";

// Define interface for Service
interface Service {
 
  title: string;
  description: string;
  image: string;
  link: string;
}

// Sample animation effect
const animationStyles = {
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

const ServicePage: React.FC<Service> = ({  title, description, image, link }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: 3,
              borderRadius: 2,
              p: 2,
              mb: 3,
              bgcolor: "background.paper",
              ...animationStyles,
            }}
          >
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                borderRadius: 2,
              }}
            />
            <Box sx={{ width: "100%", textAlign: "center", mt: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                {title}
              </Typography>
              <Typography variant="body2" paragraph>
                {description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={link} // Assuming a route like `/services/:serviceId`
                sx={{
                  mt: 2,
                  bgcolor: "#F0AD01",
                  "&:hover": { bgcolor: "#388e3c" },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicePage;
