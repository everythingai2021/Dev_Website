import React, { Fragment } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Sponsor from "../components/ourSponsor";
import ContactSection from "../components/contactpage";
import WhatWeDo from "../components/whatwedo";
import Process from "../components/Process";
const AboutPage: React.FC = () => {
  return (
   <Fragment>

      <Container sx={{mt:5}}>
      <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#1976d2", textAlign: 'center' }}
          >
         Who We are 
      </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#d0f0c0', // Light green background
            height: 'auto', // Adjust the height as needed
            textAlign: 'center',
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat. Ac auctor augue mauris augue neque. Velit scelerisque in dictum non consectetur a. Arcu ac tortor dignissim convallis aenean et tortor at risus. Integer enim neque volutpat ac tincidunt. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Orci ac auctor augue mauris augue neque gravida in. Nisl purus in mollis nunc sed id semper. Eget lorem dolor sed viverra ipsum nunc aliquet. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Porta lorem mollis aliquam ut porttitor leo.
          Duis convallis convallis tellus id interdum velit. Auctor urna nunc id cursus metus aliquam. Pulvinar sapien et ligula ullamcorper malesuada. Risus feugiat in ante metus dictum at tempor. Odio tempor orci dapibus ultrices in iaculis. Amet consectetur adipiscing elit duis. Tincidunt id aliquet risus feugiat in. Iaculis nunc sed augue lacus viverra vitae congue eu. Vitae tortor condimentum lacinia quis vel eros donec ac odio. Sed viverra tellus in hac habitasse platea dictumst.
          Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Blandit turpis cursus in hac habitasse platea dictumst quisque. Ut lectus arcu bibendum at varius. Aenean et tortor at risus viverra. Eget mi proin sed libero enim sed faucibus turpis in. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Imperdiet dui accumsan sit amet nulla facilisi morbi. Elit sed vulputate mi sit amet mauris. Ipsum dolor sit amet consectetur adipiscing. Elit eget gravida cum sociis natoque penatibus. A diam maecenas sed enim ut sem viverra aliquet. Vel orci porta non pulvinar neque. Nisi lacus sed viverra tellus in hac. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Faucibus in ornare quam viverra orci sagittis eu. At imperdiet dui accumsan sit amet nulla facilisi morbi. Ac ut consequat semper viverra nam. Malesuada pellentesque elit eget gravida.
          </Typography>
          <Button variant="contained" color="primary">
              Enter Our  Social Event
          </Button>
        </Box>

        <WhatWeDo />
        <Process/>
      </Container>
      <Sponsor />
      <ContactSection />
   </Fragment>
  );
};

export default AboutPage;
