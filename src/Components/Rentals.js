import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Rentals() {
  return (
    //use conditional logic to render all listings
    //so zipcode talks to my application and then talks to the listings
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Search</Button>
    </Box>
  );
}


  //** create a form that takes a zipcode and then has an onsubmit function that then hits 
  //my getreentals by zipcode path with the zipcode the user inputs in//
