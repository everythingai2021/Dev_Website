import React from "react";
import { Box, Container, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import MetaData from "../components/Metadata";
import MainPageBox from "../components/PageBox";
import Sponsor from "../components/ourSponsor"; 
import OurWork from "../components/OurWork";
import BoxSection from "../components/BoxSection";
import ImgMediaCard from "../components/Cards";
import TestimonialSection from "../components/Testimonial";
import image1 from "../assets/program1.jpg";
import image2 from "../assets/program3.jpg";
import image3 from "../assets/program2.jpg";

const Homepage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <MetaData
        title="Home | EverythingAI-SandBox"
        description="Welcome to EverythingAI Home"
      />
         
      <Box sx={{ py: { xs: 2, md: 4 } }}>
      <MainPageBox />
        <Container maxWidth="lg">
       
          <Sponsor />
          <OurWork />
          <BoxSection />

          <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 5, justifyContent:"center", alignItems:"center"}}
            >
              <Grid item xs={12}>
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    color: "#0097B2",
                    textAlign: "center",
                    mb: { xs: 3, md: 5 },
                  }}
                >
                  Our Programs and Activities
                </Typography>
              </Grid>

              <Grid container item spacing={3} justifyContent="center">
                <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                  <ImgMediaCard
                    url="program"
                    title="Beginners"
                    description="Ages 7-10 Teach kids to code in simple programs Give kids a basic understanding of code Kids learn Scratch and Python."
                    image={image3}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                  <ImgMediaCard
                    url="program"
                    title="Intermediate Program"
                    description="Ages 11 – 14 Introduction to Programs such as Python & Scratch Provides understanding of coding to kids"
                    image={image2}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
                  <ImgMediaCard
                    url="/program"
                    title="Elite Program"
                    description="Ages 15+ Web Development App Development Interactive Game Development Security Programs."
                    image={image1}
                  />
                </Grid>
              </Grid>
            </Grid>


          <TestimonialSection />
        </Container>
      </Box>
    </div>
  );
};

export default Homepage;
