import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Rentals from "./Rentals";

const Dashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoading) return;
    console.log(user);
    if (isAuthenticated) {
      fetch("https://aca-capstone-friendlyrent-be.onrender.com/users/" + user.sub)
        .then((response) => {
          console.log("response", response);
          return response.json();
        })
        .then((data) => {
          console.log("data", data);
          if (data.length === 0) {
            navigate("/signup");
          }
        });
    }
  }, [isLoading, isAuthenticated, navigate, user]);

  return (
    <>
      <h1
        style={{
          marginTop: 60,
          marginBottom: 50,
          fontSize: 45,
        }}
      >
        Dashboard
      </h1>
      <Rentals />
    </>
  );
};

export default Dashboard;
