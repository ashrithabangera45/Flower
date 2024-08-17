import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import images from '../images/flower1.jpg';
import imagess from '../images/flower2.jpg';


export default function Home() {
  
  return (
    <>
    <Card sx={{ maxWidth: 2000, width:'300'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={images}
          alt="green iguana"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Flowers
          </Typography>
         <Typography variant="body2" color="text.secondary">
          <h1>Explore the full lineup of SUVs, sedans, e-tron models & more. Build your own, search inventory and explore current special offers. Audi stands for sporty vehicles, high build quality and progressive design – for 
          “Vorsprung durch Technik.” The Audi Group is among the world’s leading producers of premium cars.</h1>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 2000, width:'300'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="900"
          image={imagess}
          alt="green iguana"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Flowers
          </Typography>
         <Typography variant="body2" color="text.secondary">
          <h1>Explore the full lineup of SUVs, sedans, e-tron models & more. Build your own, search inventory and explore current special offers. Audi stands for sporty vehicles, high build quality and progressive design – for 
          “Vorsprung durch Technik.” The Audi Group is among the world’s leading producers of premium cars.</h1>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/*<Button size="small" color="primary">
          Share
        </Button>*/}
      </CardActions>
    </Card>
    </>
  );
}
