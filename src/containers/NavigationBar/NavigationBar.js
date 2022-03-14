import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AvatarProfile from "./Avatar/AvatarProfile";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [username, setUsername] = useState("Yohanes");

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={15}
      py={1}
      sx={{ backgroundColor: "#2c2a32", color: "white" }}
      height={{ xl: "8vh", md: "6vh" }}
    >
      <Box sx={{ cursor: "pointer" }}>
        <Typography variant="h4" component="h1" fontWeight="bold">
          RAYFLIX
        </Typography>
      </Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        color="white"
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="body1" sx={{ color: "white" }}>
            Home
          </Typography>
        </Link>
        <Link to="/film" style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "white" }}>Film</Typography>
        </Link>
        <Link to="/trending" style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "white" }}>Trending</Typography>
        </Link>
        <Link to="/tvshow" style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "white" }}>TV Show</Typography>
        </Link>
      </Stack>
      <Box sx={{ cursor: "pointer" }}>
        <AvatarProfile username={username} />
      </Box>
    </Box>
  );
};

export default NavigationBar;
