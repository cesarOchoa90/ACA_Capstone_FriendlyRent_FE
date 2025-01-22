import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

export default function LogIn(props) {
  console.log(props)
  const handleLogIn = (e) => {
    e.preventDefault()
    props.setLoggedIn(true)
  }
  
  return (
    <Box width={300} margin={"40px auto"}>
      <Stack spacing={2} direction="column" component="form" onSubmit={handleLogIn}>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          type="input"
          required
        />
        <TextField
          id="outlined-basic2"
          label="Password"
          variant="outlined"
          type="password"
          required
        />
        <Button variant="contained" type="submit">Log In</Button>
      </Stack>
    </Box>
  );
}
