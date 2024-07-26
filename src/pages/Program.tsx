import React from "react";
import { Box, Typography, Container, Grid, ButtonGroup, Button, CssBaseline, Avatar, AvatarGroup } from "@mui/material";
import Sponsor from "../components/ourSponsor";
import ContactSection from "../components/contactpage";
import ProgramDropBox from "../components/ProgramDrop";
import Process from "../components/Process";
import TestimonialSection from "../components/Testimonial";
import MetaData from "../components/Metadata";
const Program: React.FC = () => {
  return (
    <div>
    <MetaData title="Programs | SandBox" description="Welcome to EverythingAI Home" />
  
    
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box
            sx={{
              bgcolor: '#cfe8fc',
              height: { xs: 'auto', sm: 'auto' },
              mt: "30px",
              py: { xs: 4, sm: 6 }
            }}
          >
            <Grid container spacing={2} sx={{ textAlign: 'center' }}>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  Skill Path
                </Typography>
                <Typography variant="h2" gutterBottom>
                  Everything Ai Coding Foundation
                </Typography>
                <Typography variant="body1" paragraph>
                  Start Your Programming Journey with an introduction to the world of code and basic concepts
                </Typography>
                <Typography variant="body1" paragraph>
                  Includes Technological Literacy, Career Overview, Programming Concepts, and more.
                </Typography>
              </Grid>
            </Grid>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                mt: 4
              }}
            >
              <ButtonGroup orientation="vertical" aria-label="Vertical button group">
                <Button variant="contained" color="primary" sx={{ height: 60, width: { xs: '100%', sm: 200 } }}>
                  Register Now
                </Button>
              </ButtonGroup>
              <ButtonGroup sx={{ ml: { xs: 0, sm: 4 } }}>
                <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
              </ButtonGroup>
            </Box>
          </Box>
        </Container>

        <Box sx={{ py: 4 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#1976d2", textAlign: 'center' }}
            >
              Select Program
            </Typography>

            
              <ProgramDropBox
              title="Beginner Program"
              skillLevel="Beginner"
              timeToComplete="6 Month Or less"
              certificate="When Completed, yes"
              prerequisites="None"
              aboutPath="Interested in learning how to code, but unsure where to start? This path provides an overview of the main branches of programming: computer science, web development, and data science. It teaches important concepts you’ll find in every coding language, such as variables, functions, and control flow. Take this path to understand key programming terms and chart your course to a more technical career."
              skills={["Learn coding 101", "Explore careers in tech", "Communicate with developers"]}
              items={[
                { number: 1, primary: "Brunch this weekend?", secondaryAuthor: "Ali Connors", secondaryText: " — I'll be in your neighborhood doing errands this…" },
                { number: 2, primary: "Summer BBQ", secondaryAuthor: "to Scott, Alex, Jennifer", secondaryText: " — Wish I could come, but I'm out of town this…" },
                { number: 3, primary: "Oui Oui", secondaryAuthor: "Sandra Adams", secondaryText: " — Do you have Paris recommendations? Have you ever…" }
              ]}
              buttonLabel="Register Now"
              />

              <ProgramDropBox
              title="Intermidiate Program"
              skillLevel="Beginner"
              timeToComplete="6 Month Or less"
              certificate="When Completed, yes"
              prerequisites="None"
              aboutPath="Interested in learning how to code, but unsure where to start? This path provides an overview of the main branches of programming: computer science, web development, and data science. It teaches important concepts you’ll find in every coding language, such as variables, functions, and control flow. Take this path to understand key programming terms and chart your course to a more technical career."
              skills={["Learn coding 101", "Explore careers in tech", "Communicate with developers"]}
              items={[
                { number: 1, primary: "Brunch this weekend?", secondaryAuthor: "Ali Connors", secondaryText: " — I'll be in your neighborhood doing errands this…" },
                { number: 2, primary: "Summer BBQ", secondaryAuthor: "to Scott, Alex, Jennifer", secondaryText: " — Wish I could come, but I'm out of town this…" },
                { number: 3, primary: "Oui Oui", secondaryAuthor: "Sandra Adams", secondaryText: " — Do you have Paris recommendations? Have you ever…" }
              ]}
              buttonLabel="Register Now"
              />


              <ProgramDropBox
              title="Elite Program"
              skillLevel="Beginner"
              timeToComplete="6 Month Or less"
              certificate="When Completed, yes"
              prerequisites="None"
              aboutPath="Interested in learning how to code, but unsure where to start? This path provides an overview of the main branches of programming: computer science, web development, and data science. It teaches important concepts you’ll find in every coding language, such as variables, functions, and control flow. Take this path to understand key programming terms and chart your course to a more technical career."
              skills={["Learn coding 101", "Explore careers in tech", "Communicate with developers"]}
              items={[
                { number: 1, primary: "Brunch this weekend?", secondaryAuthor: "Ali Connors", secondaryText: " — I'll be in your neighborhood doing errands this…" },
                { number: 2, primary: "Summer BBQ", secondaryAuthor: "to Scott, Alex, Jennifer", secondaryText: " — Wish I could come, but I'm out of town this…" },
                { number: 3, primary: "Oui Oui", secondaryAuthor: "Sandra Adams", secondaryText: " — Do you have Paris recommendations? Have you ever…" }
              ]}
              buttonLabel="Register Now"
              />


              <ProgramDropBox
              title="Hack-A-Thon Program"
              skillLevel="Beginner"
              timeToComplete="6 Month Or less"
              certificate="When Completed, yes"
              prerequisites="None"
              aboutPath="Interested in learning how to code, but unsure where to start? This path provides an overview of the main branches of programming: computer science, web development, and data science. It teaches important concepts you’ll find in every coding language, such as variables, functions, and control flow. Take this path to understand key programming terms and chart your course to a more technical career."
              skills={["Learn coding 101", "Explore careers in tech", "Communicate with developers"]}
              items={[
                { number: 1, primary: "Brunch this weekend?", secondaryAuthor: "Ali Connors", secondaryText: " — I'll be in your neighborhood doing errands this…" },
                { number: 2, primary: "Summer BBQ", secondaryAuthor: "to Scott, Alex, Jennifer", secondaryText: " — Wish I could come, but I'm out of town this…" },
                { number: 3, primary: "Oui Oui", secondaryAuthor: "Sandra Adams", secondaryText: " — Do you have Paris recommendations? Have you ever…" }
              ]}
              buttonLabel="Register Now"
              />    
            <Process/>
            <TestimonialSection />
            <Sponsor />
            <ContactSection />
          </Container>
        </Box>
      </React.Fragment>
    </div>
  );
};

export default Program;

