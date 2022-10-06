import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack, TextField } from "@mui/material";
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
  const [open] = useState(isOpen);
  const [fullname, setFullName] = useState("");

  return (
    <div>
      <Modal open={open}>
        <Box sx={style}>
          <Typography mb={4} variant="h6" component="h3">
            Authentication
          </Typography>
          <form
            onSubmit={(evt) => {
              evt.preventDefault();
              handleSubmitAuth(fullname);
            }}
            style={{ width: "100%" }}
          >
            <Stack spacing={2}>
              <TextField
                placeholder="Full Name"
                id="fullname"
                label="Full Name"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
              <Button variant="contained" type="submit">
                Sign in
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
