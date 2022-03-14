import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/system";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrendingList from "./containers/Movies/TrendingList/TrendingList";
import NavigationBar from "./containers/NavigationBar/NavigationBar";

const App = () => {
  return (
    <Box bgcolor="gray" minHeight="100vh">
      <CssBaseline />
      <NavigationBar />
      <Box sx={{ mx: 15, pt: 2 }}>
        <TrendingList />
      </Box>
    </Box>
  );
};

export default App;
