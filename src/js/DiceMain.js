import styles from "../css/DiceMain.module.css";
import { useState } from "react";
import Btns from "./Btns";
import DiceNumBox from "./DiceNumBox";

function DiceMain() {
  //サイコロの数
  const [numDice, setNumDice] = useState("");
  const changeNumDice = (e) => {
    setNumDice(e.target.value);
  };
  //サイコロの計算
  let valueDice = [1, 2, 3, 4, 5, 6];
  const [dice, setDice] = useState(valueDice[0]);
  const rollDice = () =>
    setDice(numDice * Math.floor(Math.random() * valueDice.length) + 1);
  return (
    <div className={styles.DiceMain}>
      {/* サイコロの結果表示 */}
      <div className={styles.DiceValue}>
        <span>{dice}</span>
      </div>
      {/* rollボタン、サイコロの数入力欄 */}
      <div className={styles.DiceInputBox}>
        <DiceNumBox value={numDice} onChange={changeNumDice} />
        <Btns btnName="roll" onClick={rollDice} />
      </div>
    </div>
  );
}

export default DiceMain;
