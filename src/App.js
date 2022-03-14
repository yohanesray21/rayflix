import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./containers/NavigationBar/NavigationBar";

const App = () => {
  return (
    <>
      <CssBaseline />
      <NavigationBar />
    </>
  );
};

export default App;
