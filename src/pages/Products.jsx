import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import images from '../images/rose1.jpg';
import axios from 'axios';
import { useEffect,useState } from 'react';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Products() {
  const [expanded, setExpanded] = React.useState(false);
  const [products,setproduct]=useState([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/products').then((res)=>{
      console.log(res)
      setproduct(res.data.products)
    }).catch((error)=>{
      console.log(error)
    })
  },[])
  console.log(products,"productdetails")
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleSearch=(e)=>{

    let data=e.target.value
    data=data.toLowerCase()
    console.log(data);
    axios.get(`https://dummyjson.com/products/search?q=${data}`)
        .then((res)=>{
            console.log(res);
            setproduct(res.data.products)
        })
        .catch((error)=>{
        console.log(error)
        })
  };

  return (
    <>
     <Typography gutterBottom
      Variant="h4"
      component="div"
      sx={{color:"#040000" ,textAlign:"center",margin:"10px"}}>
       <h1> shop product </h1>
    </Typography>
    <Box sx={{ display: 'flex', alignItems: 'center',justifyContent:"center" }}>
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="Search for product" label="Search for product" variant="standard" sx={{display:"flex"}}
        onChange={handleSearch} />
      </Box>
    <div style={{marginTop:"10px",padding:"5px",display:"flex",alignItems:"center",
      justifyContent:"center", flexWrap:"wrap",gap:"20px"}}>
   
    {products.length>0? products.map((item,index)=>{
      return(
        <Card sx={{ maxWidth: 345,width:"345px"  }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon sx={{color:"#bd3376"}} />
          </IconButton>
        }
        title={item.title}
        subheader="feb 27, 2024"
        sx={{color:"#bd3376"}}
      />
      <CardMedia
        component="img"
        height="194"
       image={item.thumbnail}
        alt="nails art "
        sx={{color:"#bd3376"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       {item.discription}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{color:"#bd3376"}}>
      <h1> Rs/{item.price}</h1>
        </Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon  sx={{color:"#bd3376"}}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon  sx={{color:"#bd3376"}} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div style={{display:"flex",gap:"20px"}}>
          <Typography paragraph style={{color:"#c51162"}}>brand:</Typography>
          <Typography paragraph>
            {item.brand}
          </Typography>
          </div>
          <div style={{display:"flex",gap:"20px"}}>
          <Typography paragraph style={{color:"#c51162"}}>shippingInformation:</Typography>
          <Typography paragraph>
           <h4 sx={{color:"#bd3376"}}> {item.shippingInformation}</h4>
          </Typography>
          </div>
        </CardContent>
      </Collapse>
    </Card>
      )
    }):"no products found"}
    </div>
    </>

  );
}
