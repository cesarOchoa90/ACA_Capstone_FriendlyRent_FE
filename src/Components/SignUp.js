import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

export default function SignUp(props) {
    const navigate = useNavigate()
  const { user} = useAuth0();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  console.log(props);
  useEffect(() => {
    console.log(user);
    console.log(state);
  }, [state, user]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    const data = {
      FirstName: state.firstName,
      LastName: state.lastName,
      Phone: state.phoneNumber,
      id: user.sub,
      Email: user.email,
    };
    fetch("http://localhost:4003/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
          navigate("/dashboard");
      });
  };

  return (
    <Box width="100%" margin={"40px auto"}>
      <Typography variant="h3" gutterBottom>
        Please provide extra infomartion
      </Typography>
      <Stack
        margin={"40px auto"}
        width={300}
        spacing={2}
        direction="column"
        component="form"
        onSubmit={handleSignUp}
      >
        <TextField
          name="firstName"
          id="firstName"
          value={state.firstName}
          label="First Name"
          variant="outlined"
          type="input"
          required
          onChange={handleChange}
        />
        <TextField
          name="lastName"
          id="lastName"
          value={state.lastName}
          label="Last Name"
          variant="outlined"
          type="input"
          required
          onChange={handleChange}
        />
        <TextField
          name="phoneNumber"
          id="phoneNumber"
          value={state.phoneNumber}
          label="Phone Number"
          variant="outlined"
          type="input"
          required
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
}
