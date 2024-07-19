import React from "react";
import { Box,  Container } from "@mui/material";
import BoxSection from "../components/BoxSection";
import OurWork from "../components/OurWork";
import ContactSection from "../components/contactpage";
import Sponsor from "../components/ourSponsor"; 
import  ImgMediaCard from  "../components/Cards";

import Grid from '@mui/material/Grid';
const Homepage: React.FC = () => {
  return (
    <>
    <Box sx={{ py:4}}>
      <Container  maxWidth="lg"> 

        {/* The  Card  for te Out ACtivites */}
      
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <ImgMediaCard/> 
              </Grid>
            ))}
          </Grid>
        </Grid>



          <Sponsor />
          <BoxSection/>
          <OurWork />
          <ContactSection />
      </Container>
    </Box>
    </>
  );
};

export default Homepage;
