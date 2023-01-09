import styles from "../css/DiceNumBox.module.css";
import { useState } from "react";

function DiceNumBox({ onChange, value }) {
  return (
    <form className={styles.DiceNumBox}>
      <label>
        サイコロの数:
        <input
          onChange={onChange}
          value={value}
          type="number"
          name="numDice"
          autocomplete="off"
        />
      </label>
    </form>
  );
}

export default DiceNumBox;
