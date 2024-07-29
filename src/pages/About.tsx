import { Box, Typography, Button, Container, Grid } from "@mui/material";
import Sponsor from "../components/ourSponsor";
import ContactSection from "../components/contactpage";
import Process from "../components/Process";
import MetaData from "../components/Metadata";
import image1 from "../assets/program1.jpg"
import image2 from "../assets/program3.jpg"
import image3 from "../assets/kids2.jpg"
import ImgMediaCard from "../components/Cards";
const AboutPage: React.FC = () => {
  return (
    <div>
      <MetaData title="Who We Are | SandBox" description="Learn more about EverythingAI" />

      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#1976d2",
            textAlign: "center",
            mb: 4,
            fontSize: { xs: '1.5rem', sm: '2rem' }, // Responsive font size
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
          
            p: 4,
            mb: 5,
            borderRadius: 3,
            boxShadow: 3,
            textAlign: "center",
            maxWidth: '900px', // Max width for content block
            mx: 'auto', // Center align content horizontally
          }}
        >
          <Typography
            variant="body1"
            paragraph
            sx={{
              fontSize: { xs: '1rem', sm: '1.2rem' }, // Responsive font size
              lineHeight: 1.8,
              mb: 4,
              color: "#333",
            }}
          >
            At Everything AI, our mission is to empower children and youth with the fundamental skills to responsibly develop and use artificial intelligence, fostering diverse and inclusive societies. We offer programs for ages 7 to 16, ranging from beginner to elite levels, teaching coding in Scratch, Python, web development, app development, and more. We hold regular online meetings every Saturday and provide a supportive community for young coders.

            Join us to make a social impact, as our programs have already engaged 100 students, with 45% being girls, and committed over 6000 hours to coding education. Hear from our students and see how coding can open new avenues for creativity and problem-solving.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font size
              px: 4,
              py: 1.5,
              borderRadius: 2,
              mt: 2,
              boxShadow: 2,
              textTransform: 'none',
              backgroundColor: '#7ED957'
            }}
            onClick={() => window.open("/events")}
          >
            Enter Our Social Event
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 5,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#0097B2", textAlign: 'center' }}
            >
            What we Offer?
          </Typography>
        </Box>
         <Grid container item spacing={3} justifyContent="center">
              <Grid item xs={12} sm={4}>
              <ImgMediaCard
                url="program"
                title="Beginners"
                description="Ages 7-10 Teach kids to code in simple programs Give kids a basic understanding of code Kids learn Scratch and Python."
                image={image1}
              />

              </Grid>
              <Grid item xs={12} sm={4}>
              <ImgMediaCard
                url="program"
                title="Intermidiate Program"
                description="Ages 11 – 14 Introduction to Programs such as Python & Scratch Provides understanding of coding to kids"
                image={image2}
              />
              </Grid>
              <Grid item xs={12} sm={4}>
              <ImgMediaCard
                url="/program"
                title="Elite Program"
                description="Ages 15+ Web Development App Development Interactive Game Development Security Programs."
                image={image3}
              />
              </Grid>
          </Grid>
        <Process />
        <ContactSection />
        <Sponsor />
      </Container>
    </div>
  );
};

export default AboutPage;
