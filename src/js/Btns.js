import styles from "../css/Btns.module.css";

function Btns({btnName, onClick}) {
  return (
      <button className={styles.Btns} onClick={onClick}>{btnName}</button>
  );
}

export default Btns;
