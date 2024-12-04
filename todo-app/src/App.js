import React, { useEffect, useState } from "react";
import "../src/App.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

// Function to get todos from local storage when the app first loads

const getInitialTodos = () => {
  const storedTodos = localStorage.getItem("todos");

  return storedTodos ? JSON.parse(storedTodos) : [];
};

const App = () => {
  // Initialize ListTodo with data from local storage
  const [ListTodo, setListTodo] = useState(getInitialTodos());

  let addList = (inputText) => {
    if (inputText !== "") {
      const newTodos = [...ListTodo, inputText];
      setListTodo(newTodos);
      localStorage.setItem("todos", JSON.stringify(newTodos)); // Store in local storage
    }
  };

  const deleteListItem = (key) => {
    const newListTodo = [...ListTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
    localStorage.setItem("todos", JSON.stringify(newListTodo)); // Update local storage
  };

  // Function to edit a list item

  const editListItem = (index, newText) => {
    const updatedList = [...ListTodo];
    updatedList[index] = newText;
    setListTodo(updatedList);
    localStorage.setItem("todos", JSON.stringify(updatedList));
  };

  return (
    <div className="main-container">
      <div className="centre-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {ListTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
              editItem={editListItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
