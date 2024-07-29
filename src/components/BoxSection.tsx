import React from 'react';
import { Box, Typography, Button, styled, Container } from "@mui/material";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

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
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate('/contact'); // Navigate to the Contact page
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Section>
          <DescriptionBox>
            <Typography variant="h5" color={"#0097B2"} gutterBottom>
              Discover the Magic of Coding with Us.
            </Typography>
            <Typography variant="body1" paragraph>
              Unlock the world of programming with our innovative approach to teaching kids how to code. We make it easy and fun for young learners to achieve their goals. Our team of experts is dedicated to providing the best learning experience possible.
            </Typography>
            <StyledButton variant="contained" onClick={handleButtonClick}>
              Get our Support Line
            </StyledButton>
          </DescriptionBox>
          <ImageCarousel>
            <Typography variant="body1" paragraph>
              Trusted by the most innovative businesses. We make it easy and fun for young learners to achieve their goals. Our team of experts is dedicated to providing the best learning experience possible.
            </Typography>
          </ImageCarousel>
        </Section>
      </Container>
    </Box>
  );
};

export default BoxSection;
