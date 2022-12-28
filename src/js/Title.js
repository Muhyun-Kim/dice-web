import styles from "../css/Title.module.css";

function Title() {
  return (
    <div className={styles.Title}>
      <span className={styles.TitleName}>Dice App</span>
    </div>
  );
}

export default Title;
