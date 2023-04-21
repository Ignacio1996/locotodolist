import { useState } from "react";
import Header from "../components/header";
import ToDoComplete from "../components/to-do-complete";
import ToDoIncomplete from "../components/to-do-incomplete";
import styles from "./index.module.css";
const ToDoListDesign = () => {
  const [todos, setTodos] = useState([
    { value: "Finish Designs", done: false },
    { value: "Locofy Designs", done: true },
  ]);

  const [inputValue, setInputValue] = useState("");

  // add to do
  const addTodo = (event) => {
    if (event.key === "Enter") {
      let copyTodos = [...todos];
      copyTodos.push({ value: event.target.value, done: false });
      setTodos(copyTodos);
      setInputValue("");
    }
  };

  // toggle to do
  const toggleTodo = (index) => {
    let copyTodos = [...todos];
    copyTodos[index].done = !copyTodos[index].done;
    setTodos(copyTodos);
  };

  // delete to do
  const deleteTodo = (index) => {
    let copyTodos = [...todos];
    copyTodos.splice(index, 1);
    setTodos(copyTodos);
  };

  return (
    <div className={styles.toDoListDesign}>
      <div className={styles.todolistcontainer}>
        <Header />
        <div className={styles.divider} />
        {todos.map((todo, index) => {
          if (todo.done) {
            return (
              <ToDoComplete
                index={index}
                todoValue={todo.value}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            );
          } else {
            return (
              <ToDoIncomplete
                index={index}
                todoValue={todo.value}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            );
          }
        })}

        <div className={styles.divider} />
        <input
          className={styles.addToDo}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add to do..."
          onKeyDown={addTodo}
        />
      </div>
    </div>
  );
};

export default ToDoListDesign;
