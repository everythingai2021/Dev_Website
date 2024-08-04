import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import ServiceImage1 from "../assets/program1.jpg";
import ServiceImage2 from "../assets/kids3.jpg";
import ServiceImage3 from "../assets/program2.jpg";
import ServiceImage4 from "../assets/kids1.jpg";
import ServiceImage5 from "../assets/program3.jpg";
import { Link } from 'react-router-dom';

const images = [
  ServiceImage1,
  ServiceImage2,
  ServiceImage3,
  ServiceImage4,
  ServiceImage5,
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
        width: '98%',
        height: { xs: 'auto', md: '60vh' },
        margin: '0 auto',
    
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
          background: "linear-gradient(135deg, #0097B2, #0097B2)",
          color: '#fff',
          borderRadius: 2,
          mb: { xs: 2, md: 0 }, // Add margin-bottom on mobile
        }}
      >
        <Typography variant="h4" gutterBottom>
          Join Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          We understand that every code created removes an inefficient process in society. Our mission is to ensure that children and youth have fundamental skills in developing responsible use of artificial intelligence products for diverse and inclusive societies.
        </Typography>
        <Button
          component={Link}
          to="/program"
          variant="contained"
          sx={{
            backgroundColor: '#ffffff',
            color: '#0097B2',
            '&:hover': {
              backgroundColor: '#e0e0e0',
            }
          }}
        >
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
          width: '95%',
          height: '100%',
        }}
      >
        <img
          src={images[currentIndex]}
          alt="Description"
          style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover' }}
        />
      </Box>
        )}
    </Box>
  );
};

export default MainPageBox;
