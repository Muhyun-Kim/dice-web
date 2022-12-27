import styles from "../css/DiceMain.module.css";
import diceMain from "../img/dice.jpg";

function DiceMain() {
  return (
    <div className={styles.DiceMain}>
      <img src={diceMain} />
    </div>
  );
}

export default DiceMain;
