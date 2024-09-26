import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";

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
};

export default function BasicModal({
  open,
  setOpen,
  inputValue,
  handleInputChange,
  handleSave,
  handleCancel, // Callback function when Cancel button is clicked
}) {
  // Function to handle the Cancel button click

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Enter the task
        </Typography>
        <TextField
          id="outlined-basic"
          label="Task"
          variant="outlined"
          fullWidth
          onChange={handleInputChange} // Update the input value
          defaultValue={inputValue}
          sx={{ mt: 2 }}
        />
        <Button
          variant="contained"
          onClick={handleCancel} // Trigger cancel callback and close the modal
          sx={{ mt: 2, mr: 2 }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={() => handleSave()} // Trigger save callback and close the modal
          sx={{ mt: 2 }}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
}
