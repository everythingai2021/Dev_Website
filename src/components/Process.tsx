import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';

const items = [
  {
    title: "Step 1",
    description: "Description for step 1"
  },
  {
    title: "Step 2",
    description: "Description for step 2"
  },
  {
    title: "Step 3",
    description: "Description for step 3"
  }
];

const Process: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2, textAlign: 'center', color:"#0097B2" }}>How It Works</Typography>
      <Grid container spacing={3}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
              <Typography>{item.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Process;
