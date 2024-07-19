import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import theme from "../components/Theme";
import emailjs from "emailjs-com";

const ContactPage: React.FC = () => {
  const handleSubmitContactForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "GTI email",
        "template_0t2una8",
        event.currentTarget,
        "MXCE0iI2QeSouzJac"
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md" style={{ minHeight: "60vh" }}>
        <Card elevation={3} sx={{ p: 3, mt: 8 }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                mb: 2,
                fontSize: 34,
                fontWeight: "medium",
                border: 1,
                borderRadius: 2,
              }}
            >
              Contact Form
            </Typography>
            <form onSubmit={handleSubmitContactForm}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Your Email"
                    variant="outlined"
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
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      backgroundColor: "#F0AD01",
                      "&:hover": { backgroundColor: "#388e3c" },
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
    </ThemeProvider>
  );
};

export default ContactPage;
