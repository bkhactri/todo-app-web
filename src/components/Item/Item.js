import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import { Draggable } from "react-beautiful-dnd";

const Item = ({ id, title, description, index }) => {
  return (
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
            }}
          >
            <CardContent>
              <Typography variant="h4">{title}</Typography>
              <Typography variant="h6">{description}</Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                color={"success"}
              >
                Edit
              </Button>
              <Button
                sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                color={"error"}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Box>
      )}
    </Draggable>
  );
};

export default Item;
