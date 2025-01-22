/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from "react";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
// Write component imports here //

// Start Router function here //
const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
};

export default Router 