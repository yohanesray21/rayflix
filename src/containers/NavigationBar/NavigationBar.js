import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AvatarProfile from "./Avatar/AvatarProfile";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const [username, setUsername] = useState("Yohanes");
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={15}
      py={1}
      sx={{ backgroundColor: "primary.main", color: "primary" }}
      height={{ xl: "8vh", md: "6vh" }}
    >
      <Box sx={{ cursor: "pointer" }}>
        <Typography
          color="primary.light"
          variant="h4"
          component="h1"
          fontWeight="bold"
        >
          RAYFLIX
        </Typography>
      </Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        color="primary.dark"
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h6" sx={{ color: "primary.dark" }}>
            Home
          </Typography>
        </Link>
        <Link to="/film" style={{ textDecoration: "none" }}>
          <Typography variant="h6" sx={{ color: "primary.dark" }}>
            Film
          </Typography>
        </Link>
        <Link to="/trending" style={{ textDecoration: "none" }}>
          <Typography variant="h6" sx={{ color: "primary.dark" }}>
            Trending
          </Typography>
        </Link>
        <Link to="/tvshow" style={{ textDecoration: "none" }}>
          <Typography variant="h6" sx={{ color: "primary.dark" }}>
            TV Show
          </Typography>
        </Link>
      </Stack>
      <Link to="/profile">
        <Box sx={{ cursor: "pointer" }}>
          <AvatarProfile username={username} variant={"dot"} />
        </Box>
      </Link>
    </Box>
  );
};

export default NavigationBar;
