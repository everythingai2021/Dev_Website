import React from 'react';
import { Box, Typography, Button, styled, Container } from "@mui/material";

const Section = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(144, 238, 144, 0.5)', // light green with transparency
  padding: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(4),
}));

const DescriptionBox = styled(Box)(({ theme }) => ({
  maxWidth: '50%',
  marginRight: theme.spacing(4),
}));

const ImageCarousel = styled(Box)(({ theme }) => ({
  flex: 1,
  height: '100%',
  maxWidth: '50%',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#2196f3', // blue color
  color: '#fff',
  marginTop: theme.spacing(2),
}));

const BoxSection = () => {
  return (
    <Box sx={{  py: 4 }}>
      <Container maxWidth="lg">
    <Section>
      <DescriptionBox>
        <Typography variant="h5" gutterBottom>
          Your Description Title
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis
          et ipsum bibendum ultricies. Donec eu turpis elit. Pellentesque sed
          fermentum ligula. Proin sollicitudin, velit vitae condimentum auctor, odio
          nisi faucibus elit, sit amet feugiat lorem ex sed nulla.
        </Typography>
        <StyledButton variant="contained">
          Join Us
        </StyledButton>
      </DescriptionBox>
      <ImageCarousel>
        {/* Image carousel component or content goes here */}
      </ImageCarousel>
    </Section>
    </Container>
    </Box>
  );
};

export default BoxSection;
