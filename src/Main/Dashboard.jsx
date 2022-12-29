import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Messages from "./Message";
import Profile from "./Profile";

function Dashboard({ id }) {
  const [current_user, switch_user] = useState("no_User");
  return (
    <>
      <p>Dashborad is active</p>
      <Routes path="/Dashboard">
        <Route path="profile" element={<Profile />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="message" element={<Messages />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default Dashboard;
