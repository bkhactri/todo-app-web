import { Container, Grid } from "@mui/material";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Item from "../Item/Item";

const List = ({ items, onDragEnd, onDeleteItem, onEditItem }) => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Grid
                container
                spacing={2}
                columns={{ xs: 4, sm: 8, md: 12 }}
                rowSpacing={4}
                columnSpacing={{ xs: 1, sm: 2, md: 6 }}
              >
                {items.length > 0
                  ? items.map((item, index) => (
                      <Grid item xs={12} sm={4} md={4} lg={4} key={item.id}>
                        <Item
                          key={item.id}
                          id={item.id}
                          title={item.title}
                          description={item.description}
                          onEditItem={onEditItem}
                          onDelete={() => onDeleteItem(item.id)}
                          index={index}
                        />
                      </Grid>
                    ))
                  : null}
                {provided.placeholder}
              </Grid>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default List;
