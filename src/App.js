import styles from "./App.module.css";
import Title from "./js/Title";
import DiceMain from "./js/DiceMain";

function App() {
  return (
    <div className={styles.App}>
      <Title />
      <DiceMain />
    </div>
    
  );
}

export default App;
