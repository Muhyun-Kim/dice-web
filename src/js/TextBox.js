import styles from "../css/NumBox.module.css";

function NumBox() {
  return (
    <form>
      <label>
        Number of Dice:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NumBox;