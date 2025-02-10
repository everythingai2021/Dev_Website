import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


interface ImgMediaCardProps {
  url: string;
  title: string;
  description: string;
  image: string;
}

// Styled Card component with hover animation
const AnimatedCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
  },
}));

const ImgMediaCard: React.FC<ImgMediaCardProps> = ({ url, title, description, image }) => {
  return (
    <AnimatedCard sx={{ width: "100%"}}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => window.open(url, '_blank')}>Learn More</Button>
      </CardActions>
    </AnimatedCard>
  );
}

export default ImgMediaCard;
