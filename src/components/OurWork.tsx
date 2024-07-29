import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import WorkImage from "../assets/kids1.jpg"; // Replace with your actual image path

const OurWork: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                maxWidth: 250,
                maxHeight: 250,
                borderRadius: 2,
                boxShadow: 3,
              }}
              alt="Our Work"
              src={WorkImage}
            />
          </motion.div>
        </Grid>
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box sx={{ mt: { xs: 3, md: 0 }, ml: { xs: 0, md: -20 } }}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#0097B2" }}
              >
                Our work makes the world work.
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }} paragraph>
              We understand that every code created removes an inefficient process in society. Our mission is to ensure that children and youth have the fundamental skills to develop and responsibly use artificial intelligence products for diverse and inclusive societies.  
                
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurWork;
