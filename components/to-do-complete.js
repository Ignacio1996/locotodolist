import styles from "./to-do-complete.module.css";
const ToDoComplete = ({ todoValue, deleteTodo, index, toggleTodo }) => {
  return (
    <div className={styles.todocomplete}>
      <img
        className={styles.image1Icon}
        alt=""
        src="/image-1@2x.png"
        onClick={() => toggleTodo(index)}
      />
      <div className={styles.finishDesigns}>{todoValue}</div>
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector.svg"
        onClick={() => {
          deleteTodo(index);
        }}
      />
    </div>
  );
};

export default ToDoComplete;
