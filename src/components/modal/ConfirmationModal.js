import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Divider, IconButton, Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ConfirmationModal = ({
  isOpen,
  setIsOpen,
  confirmAction,
  movieOwned,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      {movieOwned ? (
        <Button sx={{ width: "100%" }} variant="contained" disabled>
          You owned this movie
        </Button>
      ) : (
        <Button
          sx={{ width: "100%" }}
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          onClick={() => setIsOpen(true)}
        >
          Buy The Movie
        </Button>
      )}

      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setIsOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          sx={{
            diplay: "flex",
          }}
        >
          <Typography mr={10} variant="h6" fontWeight="bold">
            Buy Movie Confirmation
          </Typography>
          <IconButton
            aria-label="close"
            onClick={() => setIsOpen(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 12,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            color="primary.dark"
          >
            Are You Sure to Buy This Movie?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ mr: 2 }} onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="contained" onClick={confirmAction}>
            Buy
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
