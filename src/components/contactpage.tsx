import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactButton from "./ContactButton";

const SatisfactionGuarantee: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#e1f5fe", py: 4 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1976d2" }}
        >
          Our Satisfaction is Your Guarantee
        </Typography>
        <Typography variant="body2" sx={{ color: "black" }} paragraph>
        We’d love to hear from you! Whether you have questions about our programs, need assistance, or want to get involved, feel free to reach out to us using the information below.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              color="success"
              startIcon={<PhoneIcon />}
              sx={{
                minWidth: 0,
                padding: "6px 16px",
                margin: "0 8px",
                borderRadius: "8px",
                fontSize: "1rem",
                textTransform: "none",
                display: "inline-flex",
                flexShrink: 0,
                background: "#0097B2",
                "&:hover": {
                  backgroundColor: "#fffbf1",
                  color: "black",
                },
              }}
            >
              587-708-2595
            </Button>
          </Grid>
          <Grid item>
          
            <ContactButton />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SatisfactionGuarantee;
