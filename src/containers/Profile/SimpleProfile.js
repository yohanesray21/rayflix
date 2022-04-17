import { Stack, Typography } from "@mui/material";
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
      <Box
        border="1px solid #000"
        borderRadius={1}
        ml={6}
        mt={2}
        p={3}
        width="30%"
      >
        <Stack direction="row" spacing={14} mt={2}>
          <Typography>Name</Typography>
          <Typography>: {user?.fullname}</Typography>
        </Stack>
        <Stack direction="row" spacing={14} mt={2}>
          <Typography>Balance</Typography>
          <Typography>: {idrFormat(user?.balance)}</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default SimpleProfile;
