import styles from "./to-do-incomplete.module.css";
const ToDoIncomplete = ({ todoValue, deleteTodo, index, toggleTodo }) => {
  return (
    <div className={styles.todoincomplete}>
      <img
        className={styles.image2Icon}
        alt=""
        src="/image-2@2x.png"
        onClick={() => toggleTodo(index)}
      />
      <div className={styles.makeResponsiveOn}>{todoValue}</div>
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector.svg"
        onClick={() => deleteTodo(index)}
      />
    </div>
  );
};

export default ToDoIncomplete;
