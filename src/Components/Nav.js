import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth0 } from '@auth0/auth0-react';

export default function ButtonAppBar(props) {
  const { logout } = useAuth0();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Friendly Rent
          </Typography>
          {props.loggedIn && (
            <Button
              color="inherit"
              onClick={() => {
                logout({ logoutParams: { returnTo: window.location.origin } });
              }}
            >
              Log Out
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
