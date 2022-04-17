import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, FormLabel, Stack, TextField } from "@mui/material";
import { useState } from "react";

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

export const ModalValidation = ({ isOpen, handleSubmitAuth }) => {
  const [open, setOpen] = useState(isOpen);
  const [fullname, setFullName] = useState("");

  return (
    <div>
      <Modal open={open} onClose={open}>
        <Box sx={style}>
          <Typography mb={4} variant="h6" component="h3">
            Authentication
          </Typography>
          <FormControl sx={{ width: "100%" }}>
            <Stack spacing={2}>
              <TextField
                placeholder="Full Name"
                id="fullname"
                label="Full Name"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
              <Button
                onClick={() => {
                  handleSubmitAuth(fullname);
                }}
                variant="contained"
              >
                Sign in
              </Button>
            </Stack>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};
