import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import ServiceImage1 from "../assets/kids1.jpg";
import ServiceImage2 from "../assets/kids3.jpg";
import ServiceImage3 from "../assets/goalsimg.jpg";

const images = [
  ServiceImage1,
  ServiceImage2,
  ServiceImage3,
  // Add more image paths as needed
];

const MainPageBox: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen is mobile

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '80%', md: '100%' },  // Adjust width here
      height: { xs: 'auto', md: '60vh' },
      margin: '0 auto',
      backgroundColor: 'white',
      padding: 4,
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}
  >
    
      <Box
        sx={{
          flex: 1,
          padding: 2,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: "#ffffff",
          borderRadius: 2,
          mb: { xs: 2, md: 0 }, // Add margin-bottom on mobile
        }}
      >
        <Typography variant="h4" gutterBottom>
          Join Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          Become a part of our amazing community. We offer numerous benefits and opportunities for growth. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Button variant="contained" color="primary">
          Join Us
        </Button>
      </Box>
      {!isMobile && (
        <Box
          sx={{
            flex: 1,
            padding: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={images[currentIndex]}
            alt="Description"
            style={{ maxWidth: '80%', maxHeight: '80%', borderRadius: '10px' }}
          />
        </Box>
      )}
    </Box>
  );
};

export default MainPageBox;
