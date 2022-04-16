import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { idrFormat } from "../../common/currency";
import GlobalContext from "../../context/GlobalContext";

const SimpleProfile = () => {
  const { user } = useContext(GlobalContext);
  return (
    <Box display="flex">
      <Box mt={2} pl={6} width="30%">
        <Stack direction="row" spacing={14} mt={2}>
          <Typography>Name</Typography>
          <Typography>: {user?.fullname}</Typography>
        </Stack>
        <Stack direction="row" spacing={14} mt={2}>
          <Typography>Saldo</Typography>
          <Typography>: {idrFormat(user?.balance)}</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default SimpleProfile;
