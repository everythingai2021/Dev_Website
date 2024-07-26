import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,

  CssBaseline,
} from "@mui/material";
import theme from "../components/Theme";
import emailjs from "emailjs-com";
import EachPage from "../components/Eachpage";
import page from "../assets/contact.jpg"
import MetaData from "../components/Metadata";
const ContactPage: React.FC = () => {

  const handleSubmitContactForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "GTI email",
        "template_0t2una8",
        event.currentTarget,
        "MXCE0iI2QseSouzJac"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again later.");
        }
      );
  };

  return (
    <div>
    <MetaData title="Contact | SandBox" description="Welcome to EverythingAI Home" />
  
    
        <EachPage
        Title=""
        image={page}
      />
      <CssBaseline />
      <Grid container spacing={3}>
  <Grid item xs={12} sm={6}>
    <Container
      component="main"
      maxWidth="md"
      sx={{ minHeight: "60vh", display: 'flex', alignItems: 'center', justifyContent: 'center', m: 5 }}
    >
      <Card elevation={5} sx={{ p: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              mb: 3,
              fontSize: 34,
              fontWeight: 500,
              color: theme.palette.primary.main,
              borderBottom: `2px solid ${theme.palette.primary.main}`,
              pb: 1,
            }}
          >
            Contact Us
          </Typography>
          <form onSubmit={handleSubmitContactForm}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Your Email"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={4}
                  id="message"
                  label="Message"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    "&:hover": { backgroundColor: theme.palette.primary.dark },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  </Grid>

  <Grid item xs={12} sm={6}>
    <Container
      component="main"
      maxWidth="md"
      sx={{ minHeight: "60vh", display: 'flex', alignItems: 'center', justifyContent: 'center', m: 5 }}
    >
      <Card elevation={5} sx={{ p: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              mb: 3,
              fontSize: 34,
              fontWeight: 500,
              color: theme.palette.primary.main,
              borderBottom: `2px solid ${theme.palette.primary.main}`,
              pb: 1,
            }}
          >
            Address
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              mb: 3,
              fontSize: 16,
              fontWeight: 400,
            }}
          >
            Walkowski Place NW
            Edmonton, Alberta
            Canada
          </Typography>
        </CardContent>
      </Card>
    </Container>
  </Grid>
</Grid>

      
  
    </div>
  );
};

export default ContactPage;
