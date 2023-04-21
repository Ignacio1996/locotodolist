import styles from "./index.module.css";
const ToDoListDesign = () => {
  return (
    <div className={styles.toDoListDesign}>
      <div className={styles.todolistcontainer}>
        <div className={styles.addToDo}>Add to do...</div>
        <div className={styles.divider} />
        <div className={styles.todopending}>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          <div className={styles.updateFlow}>Update flow</div>
        </div>
        <div className={styles.todopending1}>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          <div className={styles.updateFlow}>Add state management</div>
        </div>
        <div className={styles.todopending2}>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          <div className={styles.updateFlow}>Push to code</div>
        </div>
        <div className={styles.todopending3}>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          <div className={styles.exportToBuilder}>
            Export to builder and make components
          </div>
        </div>
        <div className={styles.todocomplete}>
          <div className={styles.updateFlow}>
            Tag with Locofy and make responsive
          </div>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        </div>
        <div className={styles.todocomplete1}>
          <div className={styles.updateFlow}>Make responsive on Figma</div>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
        </div>
        <div className={styles.todocomplete2}>
          <img className={styles.image2Icon} alt="" src="/image-1@2x.png" />
          <div className={styles.updateFlow}>Finish designs</div>
        </div>
        <div className={styles.divider1} />
        <div className={styles.header}>
          <div className={styles.titleNotes}>
            <div className={styles.toDo}>To Do</div>
            <b className={styles.userFeedbackTomorrow}>
              User feedback tomorrow!
            </b>
          </div>
          <div className={styles.emoji}>
            <div className={styles.div}>🌤️</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoListDesign;
