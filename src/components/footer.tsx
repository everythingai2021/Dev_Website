// Footer.js
import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import logo from '../assets/EverythingAI (1).svg';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        background: "linear-gradient(45deg, #FFFFFF, #FFFFFF, #AAB0AA, #0097B2)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={3}>
            <img
              src={logo}
              alt="Company Logo"
              style={{ maxWidth: 150 }}
            />
          </Grid>
          
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Addres:
            </Typography>
            <Typography variant="body2" color="text.secondary">
                  Walkowski Place NW
                  Edmonton, Alberta
                  Canada
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Navigation
            </Typography>
            <Link href="/" color="inherit" variant="body2" display="block" gutterBottom aria-label="Home">
              Home
            </Link>
            <Link href="/about" color="inherit" variant="body2" display="block" gutterBottom aria-label="About">
              About
            </Link>
            <Link href="/services" color="inherit" variant="body2" display="block" gutterBottom aria-label="Services">
              Services
            </Link>
            <Link href="/contact" color="inherit" variant="body2" display="block" aria-label="Contact">
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://facebook.com" color="inherit" variant="body2" display="block" gutterBottom aria-label="Facebook">
              Facebook
            </Link>
            <Link href="https://twitter.com" color="inherit" variant="body2" display="block" gutterBottom aria-label="Twitter">
              Twitter
            </Link>
            <Link href="https://instagram.com" color="inherit" variant="body2" display="block" gutterBottom aria-label="Instagram">
              Instagram
            </Link>
            <Link href="https://linkedin.com" color="inherit" variant="body2" display="block" aria-label="LinkedIn">
              LinkedIn
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Everything Ai 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              © 2024 Everything Ai. All rights reserved.
            </Typography>
          </Grid>
      </Container>
    </Box>


  );
};

export default Footer;
