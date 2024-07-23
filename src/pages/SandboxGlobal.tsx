
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";

import soccer from "../assets/soccer.jpeg";
import chess from "../assets/chess.jpeg";
import baseball from "../assets/baseball.jpeg";

interface Game {
  title: string;
  description: string;
  image: string;
  link: string;
}

const games: Game[] = [
  {
    title: "SandBox 1",
    description: "A classic strategy game played on an 8x8 board.",
    image: soccer,
    link: "/Sandbox1",
  },
  {
    title: "Sandbox 2",
    description: " A classic strategy game played on an 8x8 board.A classic strategy game played on an 8x8 board.",
    image: chess,
    link: "/SandBox2",
  },
  {
    title: "SandBoox 3",
    description: "A classic strategy game played on an 8x8 board.",
    image: baseball,
    link: "/Sandbox3",
  },
 
];

const SandboxGlobal: React.FC = () => {
  

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Our SandBoxes Available for students
      </Typography>
      <Grid container spacing={4}>
        {games.map((game, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardActionArea component="a" href={game.link} target="_blank" rel="noopener noreferrer">
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
     
    </Container>
  );
};

export default SandboxGlobal;
