import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface CircleProps {
  number: number;
}
interface ProgramDropBoxProps {
  title: string;
  skillLevel: string;
  timeToComplete: string;
  certificate: string;
  prerequisites: string;
  aboutPath: string;
  skills: string[];
  items: { number: number; primary: string; secondaryAuthor: string; secondaryText: string; }[];
  buttonLabel: string;
}

const ProgramDropBox: React.FC<ProgramDropBoxProps> = ({
  title,
  skillLevel,
  timeToComplete,
  certificate,
  prerequisites,
  aboutPath,
  skills,
  items,
  buttonLabel
}) => {
  const Circle: React.FC<CircleProps> = ({ number }) => {
    return (
      <Box 
        sx={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          backgroundColor: 'lightblue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        {number}
      </Box>
    )}
  
  return (
    <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography sx={{ fontWeight: "bold", color: "Brown", justifyContent: "center" }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ height: '400px', overflow: 'auto' }}>
          <Grid container spacing={3} sx={{ paddingLeft: 10, m: 3 }}>
            <Grid item xs>
              <Typography sx={{ fontWeight: "bold", color: "Green" }}>Skill level</Typography>
              <Typography>{skillLevel}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ fontWeight: "bold", color: "Green" }}>Time to Complete</Typography>
              <Typography>{timeToComplete}</Typography>
            </Grid>
            <Grid item xs>
              <Typography sx={{ fontWeight: "bold", color: "Green" }}>Certificate of Completion</Typography>
              <Typography>{certificate}</Typography>
            </Grid>
            <Grid item xs>
              <Typography sx={{ fontWeight: "bold", color: "Green" }}>Prerequisites</Typography>
              <Typography>{prerequisites}</Typography>
            </Grid>
          </Grid>

          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ paddingLeft: 15 }}>
            <Grid item xs={6}>
              <Typography sx={{ fontWeight: "bold", color: "black" }}>About this Path</Typography>
              <Box sx={{ bgcolor: '#cfe8fc', borderRadius: 3, padding: 5 }}>
                <Typography>
                  {aboutPath}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontWeight: "bold", color: "black" }}>Skills you'll Gain</Typography>
              <Box sx={{ bgcolor: '#cfe8fc', borderRadius: 3, padding: 5, width: "300px" }}>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </Box>
            </Grid>
          </Grid>

          <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper', paddingLeft: 20 }}>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Circle number={item.number} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.primary}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {item.secondaryAuthor}
                        </Typography>
                        {item.secondaryText}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {index < items.length - 1 && <Divider variant="inset" component="li" />}
              </React.Fragment>
            ))}
          </List>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
            <Button variant="contained" disableElevation sx={{ display: "flex", justifyContent: "center" }}>
              {buttonLabel}
            </Button>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default ProgramDropBox;
