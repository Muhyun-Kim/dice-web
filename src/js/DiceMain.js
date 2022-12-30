import styles from "../css/DiceMain.module.css";
import { useState } from "react";
import Btns from "./Btns";

function DiceMain() {
  //サイコロに表示されるfunctionを作る
  let valueDice = [1, 2, 3, 4, 5, 6];
  const [dice, setDice] = useState(valueDice[0]);
  const rollDice = () =>
    setDice(Math.floor(Math.random() * valueDice.length) + 1);
  return (
    <div className={styles.DiceMain}>
      <span className={styles.DiceValue}>{dice}</span>
      <Btns onClick={rollDice} />
    </div>
  );
}

export default DiceMain;
