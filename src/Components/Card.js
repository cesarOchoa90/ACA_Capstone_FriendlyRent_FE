import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CardComponent = (props)=>{
  const rental = props.rental
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
      </CardActions>
      </Card>
      </Box>
  );
  
}

export default CardComponent