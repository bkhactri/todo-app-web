import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const CustomModal = ({
  isEdit,
  id,
  open,
  onClose,
  onAddItem,
  onEditItem,
  currentTitle,
  currentDescription,
}) => {
  const [title, setTitle] = useState(isEdit ? currentTitle : null);
  const [description, setDesc] = useState(isEdit ? currentDescription : null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleAddItem = () => {
    onAddItem({ title, description });
    onClose();
  };

  const handleEditItem = () => {
    onEditItem({ id, title, description });
    onClose();
  };

  const handleOnclose = () => {
    setTitle(isEdit ? currentTitle : null);
    setDesc(isEdit ? currentDescription : null);
    onClose();
  };

  return (
    <Dialog
      keepMounted
      open={open}
      onClose={handleOnclose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogTitle id="modal-modal-title" variant="h6" component="h2">
        {isEdit ? "Edit item" : "Add new item"}
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          required
          margin="normal"
          type="text"
          id="modal-title"
          name="title"
          label="Title"
          value={title || ""}
          variant="outlined"
          onChange={handleTitleChange}
        />
        <TextField
          fullWidth
          required
          margin="normal"
          type="text"
          id="modal-description"
          name="description"
          label="Description"
          value={description || ""}
          variant="outlined"
          onChange={handleDescChange}
          multiline
          rows={5}
        />
      </DialogContent>
      <DialogActions sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
          color="error"
          onClick={handleOnclose}
        >
          Cancel
        </Button>
        <Button
          disabled={
            isEdit
              ? title === currentTitle && description === currentDescription
              : !title || !description
          }
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
          color="success"
          onClick={isEdit ? handleEditItem : handleAddItem}
        >
          {isEdit ? "Edit" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
