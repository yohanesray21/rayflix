import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { idrFormat } from "../../common/currency";
import GlobalContext from "../../context/GlobalContext";
import AvatarProfile from "../NavigationBar/Avatar/AvatarProfile";

const Profile = () => {
  const { user } = useContext(GlobalContext);

  return (
    <Box display="flex" justifyContent="center">
      <Box mt={2} p={5} border="2px solid #000" borderRadius={1} width="30%">
        <Typography variant="h6" mb={2} fontWeight="bold">
          Personal Data
        </Typography>
        <Stack direction="row" spacing={14}>
          <Typography mt={1}>Profile Picture</Typography>
          <AvatarProfile />
        </Stack>
        <Stack direction="row" spacing={14} mt={2}>
          <Typography>Name</Typography>
          <Typography>{user?.fullname}</Typography>
        </Stack>
        <Stack direction="row" spacing={14} mt={2}>
          <Typography>Saldo</Typography>
          <Typography>{idrFormat(user?.balance)}</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Profile;
