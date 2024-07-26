import React from "react";
import { Box,  Container, Typography } from "@mui/material";
import BoxSection from "../components/BoxSection";
import OurWork from "../components/OurWork";
import MainPageBox from "../components/PageBox";
import Sponsor from "../components/ourSponsor"; 
import  ImgMediaCard from  "../components/Cards";
import TestimonialSection from "../components/Testimonial";
import Grid from '@mui/material/Grid';
import MetaData from "../components/Metadata";
const Homepage: React.FC = () => {
  return (
    <div>
    <MetaData title="Home | EverythingAI-SandBox" description="Welcome to EverythingAI Home" />
  
    {/* Add your home page content here */}

    <MainPageBox/>
    <Box sx={{ py:4}}>
      
      <Container  maxWidth="lg" fixed> 
        <Sponsor />
         <OurWork />
         <BoxSection/>
        {/* The  Card  for te Out ACtivites */}
      
        <Grid item xs={12} sx={{mb:5}}>
          <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#1976d2", textAlign: 'center', mb:5, }}
            >
              Our Programs and Activities
            </Typography>
          <Grid container justifyContent="center" spacing={3}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <ImgMediaCard/> 
              </Grid>
            ))}
          </Grid>
        </Grid>
        <TestimonialSection/>
      </Container>
      
    </Box>
   
    </div>
  );
};

export default Homepage;
