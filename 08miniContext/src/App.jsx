import React, { useContext, useState } from "react";
import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContext from "./context/userContext";
import Header from "./components/Header";

function App() {
  
  return (
    <UserContextProvider>
      <Header/>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
