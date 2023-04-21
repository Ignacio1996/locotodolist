import Header from "../components/header";
import ToDoComplete from "../components/to-do-complete";
import ToDoIncomplete from "../components/to-do-incomplete";
import styles from "./index.module.css";
const ToDoListDesign = () => {
  return (
    <div className={styles.toDoListDesign}>
      <div className={styles.todolistcontainer}>
        <Header />
        <div className={styles.divider} />
        <ToDoComplete todoValue="Finish designs" />
        <ToDoIncomplete todoValue="Make responsive on Figma" />
        <div className={styles.divider} />
        <input
          className={styles.addToDo}
          type="text"
          placeholder="Add to do..."
        />
      </div>
    </div>
  );
};

export default ToDoListDesign;
