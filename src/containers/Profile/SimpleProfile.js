import {
  Card,
  Stack,
  Typography,
  CardHeader,
  CardContent,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { idrFormat } from "../../common/currency";
import GlobalContext from "../../context/GlobalContext";

const SimpleProfile = () => {
  const { user } = useContext(GlobalContext);
  const location = useLocation();
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
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default SimpleProfile;
