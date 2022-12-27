import React from "react";
import styles from "../css/Title.module.css";

//タイトル
function Title() {
  return (
    <div className="Title">
      <div className={styles.TitleName}>Dice App</div>
    </div>
  );
}

export default Title;
