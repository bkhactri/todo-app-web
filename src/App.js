import { useState } from "react";
import { Container, Typography, IconButton, Tooltip } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import List from "./components/List/List";
import CustomModal from "./components/Modal/Modal";
import { todos } from "./store/index";
let CURRENT_INDEX = 7;

const App = () => {
  const [todoList, setTodoList] = useState(todos);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onHandleOpenModal = () => {
    setIsOpenModal(true);
  };

  const onHandleCloseModal = () => {
    setIsOpenModal(false);
  };

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

  const onDeleteItem = (itemId) => {
    console.log(itemId);
    const remainItems = todoList.filter((item) => item.id !== itemId);
    setTodoList(remainItems);
  };

  const onAddItem = (item) => {
    console.log(item);
    const newTodoList = [{ id: CURRENT_INDEX++, ...item }].concat(todoList);
    setTodoList(newTodoList);
  };

  const onEditItem = (editedItem) => {
    const newTodoList = todoList.map((item) => {
      return item.id === editedItem.id ? editedItem : item;
    });
    setTodoList(newTodoList);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" align="center" sx={{ mt: 4, fontWeight: 600 }}>
        My To-do List
        <Tooltip title="Add task">
          <IconButton sx={{ ml: 2 }} onClick={onHandleOpenModal}>
            <AddCircleIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        </Tooltip>
      </Typography>
      <List
        items={todoList}
        onDragEnd={onDragEnd}
        onEditItem={onEditItem}
        onDeleteItem={onDeleteItem}
      />
      <CustomModal
        open={isOpenModal}
        onClose={onHandleCloseModal}
        onAddItem={onAddItem}
      />
    </Container>
  );
};

export default App;
