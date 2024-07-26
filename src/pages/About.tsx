
import { Box, Typography, Button, Container } from "@mui/material";
import Sponsor from "../components/ourSponsor";
import ContactSection from "../components/contactpage";
import WhatWeDo from "../components/whatwedo";
import Process from "../components/Process";
import MetaData from "../components/Metadata";
const AboutPage: React.FC = () => {
  return (
    <div>
    <MetaData title="Who we are | SandBox" description="Welcome to EverythingAI Home" />
  
      <Container sx={{ mt: 5 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#1976d2",
            textAlign: "center",
            mb: 4,
            fontSize: '2rem', // Adjust font size
          }}
        >
          Who We Are
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#d0f0c0", // Light green background
            height: "auto",
            textAlign: "center",
            borderRadius: 2,
            p: 3,
            mb: 4,
            boxShadow: 2, // Added shadow for depth
          }}
        >
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: "1.1rem", // Increase font size for better readability
              lineHeight: 1.6,
              mb: 3,
              maxWidth: '800px', // Max width for text block
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat. Ac auctor augue mauris augue neque. Velit scelerisque in dictum non consectetur a. Arcu ac tortor dignissim convallis aenean et tortor at risus. Integer enim neque volutpat ac tincidunt. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Orci ac auctor augue mauris augue neque gravida in. Nisl purus in mollis nunc sed id semper. Eget lorem dolor sed viverra ipsum nunc aliquet. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Porta lorem mollis aliquam ut porttitor leo.
            Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Blandit turpis cursus in hac habitasse platea dictumst quisque. Ut lectus arcu bibendum at varius. Aenean et tortor at risus viverra. Eget mi proin sed libero enim sed faucibus turpis in. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Imperdiet dui accumsan sit amet nulla facilisi morbi. Elit sed vulputate mi sit amet mauris. Ipsum dolor sit amet consectetur adipiscing. Elit eget gravida cum sociis natoque penatibus. A diam maecenas sed enim ut sem viverra aliquet. Vel orci porta non pulvinar neque.   </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: "1rem", // Adjust font size
              px: 4,
              py: 2,
              borderRadius: 2,
              mt: 2,
              boxShadow: 1, // Added shadow for better button appearance
            }}
          >
            Enter Our Social Event
          </Button>
        </Box>
        <WhatWeDo />
        <Process />
        <ContactSection />
        <Sponsor />
      </Container>
    </div>
  );
};

export default AboutPage;
