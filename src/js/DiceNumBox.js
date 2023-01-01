import styles from "../css/DiceNumBox.module.css";
import { useState } from "react";

function DiceNumBox({onChange, value}) {
  return (
    <form>
      <label>
        Number of Dice:
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
