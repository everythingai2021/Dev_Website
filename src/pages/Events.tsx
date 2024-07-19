import React from 'react';
import { Container, Grid, Box, Typography, Card, CardMedia } from '@mui/material';
import image1 from "../assets/soccer.jpeg"
import image2 from "../assets/baseball.jpeg"

const EventPage: React.FC = () => {
  return (
    <Container component="main" maxWidth="lg" sx={{ py: 5 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Upcoming Event
        </Typography>
      </Box>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia
              component="img"
              image={image1} // Replace with your image URL
              alt="Event"
              sx={{ height: 300, objectFit: 'cover' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Event Title
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur auctor lacus, at laoreet quam. 
              Curabitur ut ligula a velit sodales aliquam. Vivamus lacinia sapien et orci varius, a sodales justo 
              suscipit. Praesent vel nisi id metus iaculis pharetra.
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Date: September 30, 2024
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Location: 123 Event Street, City, Country
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia
              component="img"
              image={image2} // Replace with your image URL
              alt="Event"
              sx={{ height: 300, objectFit: 'cover' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Event Title
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur auctor lacus, at laoreet quam. 
              Curabitur ut ligula a velit sodales aliquam. Vivamus lacinia sapien et orci varius, a sodales justo 
              suscipit. Praesent vel nisi id metus iaculis pharetra.
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Date: September 30, 2024
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Location: 123 Event Street, City, Country
            </Typography>
            
          </Box>
        </Grid>
      </Grid>
     
    </Container>
  );
};

export default EventPage;
