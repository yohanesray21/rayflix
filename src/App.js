import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/system";
import React from "react";
import NavigationBar from "./containers/NavigationBar/NavigationBar";
import RoutesApp from "./routes";

const App = () => {
  return (
    <Box bgcolor="gray" minHeight="100vh">
      <CssBaseline />
      <NavigationBar />
      <Box sx={{ mx: 15, pt: 2 }}>
        <RoutesApp />
      </Box>
    </Box>
  );
};

export default App;
