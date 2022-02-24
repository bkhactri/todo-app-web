import { useState } from "react";
import { Container, Typography } from "@mui/material";
import List from "./components/List/List";
import { todos } from "./store/index";

const App = () => {
  const [todoList, setTodoList] = useState(todos);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(
      todoList,
      result.source.index,
      result.destination.index
    );
    setTodoList(items);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" align="center" sx={{ mt: 4, fontWeight: 600 }}>
        React Todo List
      </Typography>
      <List items={todoList} onDragEnd={onDragEnd} />
    </Container>
  );
};

export default App;
