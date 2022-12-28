import { useState } from "react";
import styles from "../css/Btn.module.css";

// function setDiceValue() {
//   const [dice, setDice] = useState(0);
//   const rollDice = () => setDice((prev) => prev + 1);
//   return()
// }

//button UI
function Btn() {
  const [dice, setDice] = useState(0);
  const rollDice = () => setDice((prev) => prev + 1);
  return (
    <button onClick={rollDice} className={styles.Btn}>
      <h1>{dice}</h1>
    </button>
  );

}

export default Btn;
export const str = {dice}
