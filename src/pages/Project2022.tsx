import React, { useState } from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box, Button, CardActionArea } from "@mui/material";
import BasicModal from "../components/ModalPage";
import snake from "../assets/snake.jpeg"
import football from "../assets/football.jpeg"
import carRace from "../assets/carrace.jpeg"
import MetaData from "../components/Metadata";
interface Game {
  title: string;
  description: string;
  image: string;
  link: string;
}

const games: Game[] = [
  {
    title: "Football",
    description: "A classic strategy game played on an 8x8 board.",
    image: football,
    link: "https://scratch.mit.edu/projects/16598326/embed",
  },
  {
    title: "Car Race",
    description: "A classic strategy game played on an 8x8 board.",
    image: carRace,
    link: "https://scratch.mit.edu/projects/554778829/embed",
  },
  
  {
    title: "SNAKE",
    description: "A classic strategy game played on an 8x8 board.",
    image: snake,
    link: "https://scratch.mit.edu/projects/226445813/embed",
  },
  
  
  // Add other games here
];

const ProjectPage2022: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const handleOpen = (game: Game) => {
    setSelectedGame(game);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedGame(null);
  };

  return (
    <div>
    <MetaData title="Programs 2022 | SandBox" description="Welcome to EverythingAI Home" />
  
    <Container sx={{ py: 5 }}>
     
      <Typography variant="h3" component="h1" gutterBottom>
        Games and Activities
      </Typography>
      <Grid container spacing={4}>
        {games.map((game, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardActionArea onClick={() => handleOpen(game)}>
                <CardMedia
                  component="img"
                  image={game.image}
                  alt={game.title}
                  sx={{ height: 140 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {game.title}
                  </Typography>
                  <Typography>
                    {game.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" sx={{ bgcolor: '#247B27' }}>
          Join Us
        </Button>
      </Box>

      {/* Modal for displaying game details */}
      <BasicModal
        open={open}
        handleClose={handleClose}
        game={selectedGame || undefined}
      />
    </Container>
    </div>
  );
};

export default ProjectPage2022;
