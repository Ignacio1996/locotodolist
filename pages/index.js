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

  // toggle todo
  const toggleTodo = (index) => {};

  return (
    <div className={styles.toDoListDesign}>
      <div className={styles.todolistcontainer}>
        <Header />
        <div className={styles.divider} />
        {todos.map((todo) => {
          if (todo.done) {
            return (
              <ToDoComplete todoValue={todo.value} toggleTodo={toggleTodo} />
            );
          } else {
            return (
              <ToDoIncomplete todoValue={todo.value} toggleTodo={toggleTodo} />
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
