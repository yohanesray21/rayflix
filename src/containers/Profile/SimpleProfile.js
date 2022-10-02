import {
  Card,
  Stack,
  Typography,
  CardHeader,
  CardContent,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { idrFormat } from "../../common/currency";
import GlobalContext from "../../context/GlobalContext";

const SimpleProfile = () => {
  const { user } = useContext(GlobalContext);
  const location = useLocation();

  const movieCount = useMemo(() => {
    const movieOwnedInStorage = sessionStorage.getItem("movieOwned");
    try {
      if (movieOwnedInStorage) {
        const movieIds = JSON.parse(movieOwnedInStorage);

        if (Array.isArray(movieIds)) {
          return movieIds.length;
        } else {
          return [];
        }
      } else {
        return [];
      }
    } catch (err) {
      return 0;
    }
  }, []);

  return (
    <Box display={location?.pathname === "/profile" ? "none" : ""}>
      <Box width={{ xs: "100%", sm: "50%", md: "30%" }} mt={4}>
        <Card variant="outlined">
          <CardHeader title="Profile Information" />

          <CardContent>
            <Stack spacing={1.5}>
              <Box>
                <Typography variant="caption" fontWeight={700}>
                  Name
                </Typography>
                <Typography>{user?.fullname}</Typography>
              </Box>
              <Box>
                <Typography variant="caption" fontWeight={700}>
                  Balance
                </Typography>
                <Typography>{idrFormat(user?.balance)}</Typography>
              </Box>
              <Box>
                <Typography variant="caption" fontWeight={700}>
                  Movie Owned
                </Typography>
                {movieCount > 0 ? (
                  <Typography>
                    {movieCount} {movieCount === 1 ? "movie" : "movies"}
                  </Typography>
                ) : (
                  <Typography>-</Typography>
                )}
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default SimpleProfile;
