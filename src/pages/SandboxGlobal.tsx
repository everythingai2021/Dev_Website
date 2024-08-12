
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";

import soccer from "../assets/oneComplier.jpeg";
import chess from "../assets/programiz.jpeg";
import baseball from "../assets/onlinebata.jpeg";

interface Game {
  title: string;
  description: string;
  image: string;
  link: string;
}

const games: Game[] = [
  {
    title: "One Compiler",
    description: "Write, Run & Share Javascript code online using OneCompiler's JS online compiler for free. It's one of the robust, feature-rich online compilers for Javascript language. Getting started with the OneCompiler's Javascript editor is easy and fast..",
    image: soccer,
    link: "/Sandbox1",
  },
  {
    title: "Programiz",
    description: " Programiz offers beginner-friendly tutorials, examples, and online compilers for various programming languages. You can also access interactive courses, learning paths, and app library to learn coding on the go.",
    image: chess,
    link: "/SandBox2",
  },
  {
    title: "Online Python Bata",
    description: "Build, run, and share Python code online for free with the help of online-integrated python's development environment (IDE). It is one of the most efficient, dependable, and potent online compilers for the Python programming language.",
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
