import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import images from '../images/flower3.jpg';
import imagess from '../images/flower4.jpg';
export default function About() {
  return (
    <>
    <Card sx={{ maxWidth: 2000 ,width:'300'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={images}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h1>FLOWERS</h1>
          </Typography>
          <Typography variant="body2" color="text.secondary">
         <h1>A flower, also known as a bloom or blossom, is the reproductive structure found in flowering plants 
          (plants of the division Angiospermae). Flowers consist of a combination of vegetative organs – sepals that enclose 
          and protect the developing flower. These petals attract pollinators, and reproductive organs that produce gametophytes, 
          which in flowering plants produce gametes. The male gametophytes, which produce sperm, are enclosed within pollen grains produced in the anthers. 
          The female gametophytes are contained within the ovules produced in the carpels.</h1>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 2000 ,width:'300',display:'flex'}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="2000"
        image={imagess}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>types of Flowers</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
       <h1>A flower, also known as a bloom or blossom, is the reproductive structure found in flowering plants 
        (plants of the division Angiospermae). Flowers consist of a combination of vegetative organs – sepals that enclose 
        and protect the developing flower. These petals attract pollinators, and reproductive organs that produce gametophytes, 
        which in flowering plants produce gametes. The male gametophytes, which produce sperm, are enclosed within pollen grains produced in the anthers. 
        The female gametophytes are contained within the ovules produced in the carpels.</h1>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </>
  );
}
