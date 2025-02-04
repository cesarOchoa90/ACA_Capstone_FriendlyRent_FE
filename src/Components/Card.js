import * as React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import IconButton from '@mui/material/IconButton';


const CardComponent = (props)=>{
  const rental = props.rental
  const { user } = useAuth0();

  const[isFavorite,setIsFavorite] = useState(false)

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    fetch("http://localhost:4003/savedlists", 
    // "https://aca-capstone-friendlyrent-be.onrender.com/savedlists",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        PropertyId:rental.id, UserId: user.sub
      }),
    })
        .then((response) => {
          console.log("response", response);
          return response.json();
        })
        .then((data) => {
          console.log("data", data);
        });

  }

 return (
    <Box sx={{ width: 275 }}>
      <Card variant="outlined">
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Rental Preview
        </Typography>
        <Typography variant="h5" component="div">
          {rental.addressLine1}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}> Days on Market: {rental.daysOnMarket}</Typography>
        <Typography variant="body2">
          Property type: {rental.propertyType}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>

        <IconButton onClick={handleFavoriteClick} aria-label="add to favorites"> {/* Use IconButton */}
      {isFavorite ? (
        <FavoriteOutlinedIcon /> // Show filled heart if isFavorite is true
      ) : (
        <FavoriteBorderOutlinedIcon /> // Show outlined heart if isFavorite is false
      )}
    </IconButton>
      </CardActions>
      </Card>
      </Box>
  );
  
}

export default CardComponent