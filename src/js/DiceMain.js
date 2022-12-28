import styles from "../css/DiceMain.module.css";
import Btn from "./Btn"
import {str} from './Btn'

function DiceMain() {
  return (
    <div className={styles.DiceMain}>
      <span className={styles.DiceValue}>{str}</span>
    </div>
  );
}

export default DiceMain;
