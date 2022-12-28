import styles from "./App.module.css";
import Title from "./js/Title";
import DiceMain from "./js/DiceMain";
import Btn from "./js/Btn";

function App() {
  return (
    <div className={styles.App}>
      <Title />
      <DiceMain />
      <Btn />
    </div>
  );
}

export default App;
