import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import images from "../images/flower3.jpg"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';
import { colors,Grid } from '@mui/material';
//import { DisplaySettings } from '@mui/icons-material';


export default function FilterProduct() {
    const {mybeauty}=useParams()
    console.log(mybeauty,"myBeauty")
    const[product,setproduct]=React.useState([])
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/category/${mybeauty}`)
        .then((res)=>{
            console.log(res,"res");
            setproduct(res.data.products)
        })
        .catch((error)=>{
        console.log(error)
        })
    },[])
    console.log(product,"productsdetails")
    return( //we can use style method inside div
        <> 
        <div>
        <Grid container spacing={2} sx={{display:'flex'}}>
        {product.length>0?product?.map((item,i)=>{

  return (
    <Grid item xs={12}sm={6}md={4}>
    <Card sx={{ maxWidth: 400, marginTop:"15px",}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="400"
        image={item.thumbnail}
      />
      <CardContent>
      <Typography gutterBottom
      Variant="h4"
      component="div"
      sx={{color:"#040000" ,textAlign:"center",margin:"10px"}}>
        {mybeauty}product
    </Typography>
      <Typography gutterBottom variant="h5" component="div" sx={{colors:"#ff00ff"}}>
         <h4> {item.title}</h4>
        </Typography>
      <Link to={`/Beauty-product/${item.name}`}> 
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#bd3376"}}>
        <h4 >Rs-/ {item.price}</h4>
        </Typography></Link>
        <Typography variant="body2" color="text.secondary">
        Explore the full lineup of SUVs, sedans, e-tron models & more. Build your own, search inventory and explore current special offers. Audi stands for sporty vehicles, high build quality and progressive design – for 
        “Vorsprung durch Technik.” The Audi Group is among the world’s leading producers of premium cars.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color:"#bd3376"}} ><h1>Share</h1></Button>
        <Button size="small" sx={{color:"#bd3376"}}><h1>Learn More</h1></Button>
      </CardActions>
    </Card>
    </Grid>
  )}
):"no data found for this category"}
</Grid>
</div>
</>
    )
}

