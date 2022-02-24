import { useState } from "react";
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import CustomModal from "../Modal/Modal";

const Item = ({ id, title, description, index, onDelete, onEditItem }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onHandleOpenModal = () => {
    setIsOpenModal(true);
  };

  const onHandleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <Draggable draggableId={title} index={index}>
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card
              sx={{
                border: "1px solid #333",
                padding: "10px",
                borderRadius: "10px",
                minHeight: "200px",
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {title}
                </Typography>
                <Typography variant="h6" sx={{ fontSize: "16px" }}>
                  {description}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  color={"success"}
                  onClick={onHandleOpenModal}
                >
                  Edit
                </Button>
                <Button
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                  color={"error"}
                  onClick={onDelete}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Box>
        )}
      </Draggable>
      <CustomModal
        isEdit
        id={id}
        open={isOpenModal}
        onEditItem={onEditItem}
        onClose={onHandleCloseModal}
        currentTitle={title}
        currentDescription={description}
      />
    </>
  );
};

export default Item;
