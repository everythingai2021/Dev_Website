import React, { useRef } from "react";
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
import emailjs from '@emailjs/browser';
import EachPage from "../components/Eachpage";
import page from "../assets/contact.jpg";
import MetaData from "../components/Metadata";
import { useTheme } from '@mui/material/styles';

const ContactPage: React.FC = () => {
  const theme = useTheme();
  const form = useRef<HTMLFormElement>(null);

  const handleSubmitContactForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_w755efv",
          "template_gvr462x",
          form.current,
          "1acKl3XKVMsHQz95G"
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
    }
  };

  return (
    <div>
      <MetaData title="Contact | SandBox" description="Welcome to EverythingAI Home" />
      <EachPage Title="" image={page} />
      <CssBaseline />
      <Container component="main"  sx={{ my: 4, width: '90%', maxWidth: '1200px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card elevation={5} sx={{ p: 2, borderRadius: 2 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "center",
                    mb: 2,
                    fontSize: { xs: '24px', sm: '34px' },
                    fontWeight: 500,
                    color: theme.palette.primary.main,
                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                    pb: 1,
                  }}
                >
                  Contact Us
                </Typography>
                <form ref={form} onSubmit={handleSubmitContactForm}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        name="user_name"
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
                        name="user_lastname"
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
                        name="user_email"
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
                        name="message"
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
                          py: 1.5,
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card elevation={5} sx={{ p: 2, borderRadius: 2 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "center",
                    mb: 2,
                    fontSize: { xs: '24px', sm: '34px' },
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
                    fontSize: { xs: '14px', sm: '16px' },
                    fontWeight: 400,
                  }}
                >
                  Walkowski Place NW
                  <br />
                  Edmonton, Alberta
                  <br />
                  Canada
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactPage;
