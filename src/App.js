import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/system";
import React from "react";
import NavigationBar from "./containers/NavigationBar/NavigationBar";
import RoutesApp from "./routes";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box minHeight="100vh">
        <CssBaseline />
        <NavigationBar />
        <Box sx={{ mx: 15, pt: 2 }}>
          <RoutesApp />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
