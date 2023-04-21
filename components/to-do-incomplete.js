import styles from "./to-do-incomplete.module.css";
const ToDoIncomplete = ({ todoValue }) => {
  return (
    <div className={styles.todoincomplete}>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.makeResponsiveOn}>{todoValue}</div>
    </div>
  );
};

export default ToDoIncomplete;
