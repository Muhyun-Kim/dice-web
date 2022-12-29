import styles from "../css/DiceMain.module.css";
import { useState } from "react";

function DiceMain() {
  //サイコロに表示されるfunctionを作る
  let valueDice = [1, 2, 3, 4, 5, 6];
  let pickDice = Math.floor(Math.random() * valueDice.length);
  const [dice, setDice] = useState(valueDice[0]);
  const rollDice = () => setDice((prev) => prev + 1);
  return (
    <div className={styles.DiceMain}>
      <span className={styles.DiceValue}>{dice}</span>
      <button onClick={rollDice} className={styles.Btn}>
        rolldice
      </button>
    </div>
  );
}

export default DiceMain;
