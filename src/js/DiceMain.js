import styles from "../css/DiceMain.module.css";
import { useState } from "react";
import Btns from "./Btns";
import TextBox from "./TextBox";

function DiceMain() {
  //サイコロに表示されるfunctionを作る
  let valueDice = [1, 2, 3, 4, 5, 6];
  const [dice, setDice] = useState(valueDice[0]);
  const rollDice = () =>
    setDice(Math.floor(Math.random() * valueDice.length) + 1);
  return (
    <div className={styles.DiceMain}>
      {/* サイコロの結果表示 */}
      <div className={styles.DiceValue}>
        <span>{dice}</span>
      </div>
      {/* rollボタン、サイコロの数入力欄 */}
      <div className={styles.DiceInputBox} >
        <Btns btnName="roll" onClick={rollDice} />
        <TextBox />
      </div>
    </div>
  );
}

export default DiceMain;
