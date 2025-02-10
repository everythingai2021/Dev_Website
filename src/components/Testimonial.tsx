import React, { useState } from 'react';
import { Box, Typography, IconButton, Avatar } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import imag from "../assets/imageframe3.jpg";

interface Testimonial {
  image: string;
  name: string;
  description: string;
}

const testimonials: Testimonial[] = [
  { image: imag, name: 'John Doe', description: 'This is an amazing service! Highly recommend to everyone.' },
  { image: imag, name: 'Jane Smith', description: 'Fantastic experience, will definitely use again.' },
  { image: imag, name: 'Sam Wilson', description: 'Great quality and excellent customer service.' },
  { image: imag, name: 'Lisa Brown', description: 'I am very satisfied with my purchase!' },
  { image: imag, name: 'Mike Johnson', description: 'Highly professional and reliable.' },
  { image: imag, name: 'Jadkndkne Smith', description: 'Fantastic experience, will definitely use again.' },
  { image: imag, name: 'Sdknkdam Wilson', description: 'Great quality and excellent customer service.' },
  { image: imag, name: 'Lisa Brddddjvjbdown', description: 'I am very satisfied with my purchase!' },
  // Add more testimonials as needed
];

const testimonialsToShow = 1; // Number of testimonials to show at a time on mobile

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - testimonialsToShow : prevIndex - testimonialsToShow
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + testimonialsToShow >= testimonials.length ? 0 : prevIndex + testimonialsToShow
    );
  };

  const displayedTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsToShow);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        background: 'linear-gradient(to right, #0097B2, #7ED957)',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '90%',
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#fff", textAlign: 'center', mb: 2 }}
      >
        Our Testimonials
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', overflowX: 'hidden' }}>
        <IconButton onClick={handlePrevious} sx={{ display: { xs: 'flex', md: 'flex' }, visibility: { xs: currentIndex === 0 ? 'hidden' : 'visible', md: 'visible' } }}>
          <ArrowBackIos />
        </IconButton>

        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflowX: 'auto', width: '100%' }}>
          {displayedTestimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                flex: '0 0 100%', // Adjusted to fit 1 testimonial per slide on mobile
                textAlign: 'center',
                padding: 1,
                boxSizing: 'border-box',
              }}
            >
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{
                  width: 80,
                  height: 80,
                  margin: '0 auto',
                  border: '2px solid white',
                }}
              />
              <Typography variant="h6" align="center" gutterBottom sx={{ fontSize: { xs: 'body2', sm: 'h6' }, color: '#fff' }}>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" align="center" sx={{ fontSize: { xs: 'body2', sm: 'body1' }, color: '#fff' }}>
                {testimonial.description}
              </Typography>
            </Box>
          ))}
        </Box>

        <IconButton onClick={handleNext} sx={{ display: { xs: 'flex', md: 'flex' }, visibility: { xs: currentIndex + testimonialsToShow >= testimonials.length ? 'hidden' : 'visible', md: 'visible' } }}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TestimonialSection;
