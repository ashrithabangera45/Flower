import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Grid } from '@mui/material';
import axios from "axios"
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
//import {Grid }from '@mui/material';

export default function Category() { //link copied from dummyjason.com
    const[category,setCategory ]=useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/categories').then(
            (res)=>{
               console.log(res);
               setCategory(res.data)
            }).catch((error)=>{
            console.log(error);
          })
    },[])



console.log(category,"categories");
return(
  <>
  <Typography gutterBottom
      Variant="h4"
      component="div"
      sx={{color:"#040000" ,textAlign:"center",margin:"10px"}}>
       <h1> Brower product categories</h1>
    </Typography>
  <Grid container spacing={2} sx={{marginTop:"10px",padding:"10px",display:"flex",alignItems:"center",
    justifyContent:"center", flexWrap:"wrap"}}>
{category.map((item,i)=>{


  return (
    <Grid item xs={12}sm={6}md={4}>
    <Card sx={{ maxWidth: 345, backgroundColor:"#ababab",padding:"2px", marginTop:"15px" }}>
      <CardActionArea>
        <CardContent>
         <Link to={`/Beauty-product/${item.name}`}> <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography></Link>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  )}
)}
</Grid>
    </>
  );
}
// npm i axios
// get ,post,put,delete,patch 