import "./App.css";
import Nav from "./Components/Nav";
import Router from "./Router";
import React, {} from "react";
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">
      <Nav loggedIn={isAuthenticated} />
     <Router/>
    </div>
  );
}

export default App;
