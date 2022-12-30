import styles from "../css/Btns.module.css";

function Btns({onClick}) {
  return (
      <button className={styles.Btns} onClick={onClick}>secondBtn</button>
  );
}

export default Btns;
