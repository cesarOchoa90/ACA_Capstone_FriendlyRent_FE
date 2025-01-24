import "./App.css";
import Nav from "./Components/Nav";
import Router from "./Router";
import React, {} from "react";

function App() {
  return (
    <div className="App">
      <Nav loggedIn={true} />
     <Router/>
    </div>
  );
}

export default App;
