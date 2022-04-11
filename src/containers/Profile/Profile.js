import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AvatarProfile from "../NavigationBar/Avatar/AvatarProfile";

const Profile = () => {
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
          <Typography>Yohanes Silitonga</Typography>
        </Stack>
        <Stack direction="row" spacing={14} mt={2}>
          <Typography>Saldo</Typography>
          <Typography>Rp. 100.000,-</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Profile;
