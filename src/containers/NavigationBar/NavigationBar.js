import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import AvatarProfile from "./Avatar/AvatarProfile";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navigations = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Film",
    href: "/film",
  },
  {
    label: "Trending",
    href: "/trending",
  },
  {
    label: "TV Show",
    href: "/tvshow",
  },
];

const NavigationBar = () => {
  const [username, setUsername] = useState("Yohanes");
  const navigate = useNavigate();

  const location = useLocation();

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
        {navigations.map((navigation) => {
          const isActive = navigation.href === location.pathname;

          return (
            <Link to={navigation.href} style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{ color: isActive ? "common.white" : "primary.dark" }}
              >
                {navigation.label}
              </Typography>
            </Link>
          );
        })}
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
