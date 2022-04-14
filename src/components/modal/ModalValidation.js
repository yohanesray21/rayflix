import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, FormLabel, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Label } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

export const ModalValidation = () => {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography mb={4} variant="h6" component="h3">
            Authentication
          </Typography>
          <FormControl>
            <Stack spacing={2}>
              <FormLabel>Fullname</FormLabel>
              <TextField
                placeholder="Full Name"
                id="name"
                label="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <FormLabel>Password</FormLabel>

              <TextField
                placeholder="Password"
                id="password"
                label="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <FormLabel>Confirmation Password</FormLabel>

              <TextField
                placeholder="confirmPassword"
                id="confirmPassword"
                label="Confirmation Password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
              <Button variant="contained">Sign in</Button>
            </Stack>
          </FormControl>
        </Box>
      </Modal>

      <Button onClick={handleOpen}>Open modal</Button>
    </div>
  );
};
