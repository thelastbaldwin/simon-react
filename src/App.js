import React, {useState, useCallback} from "react";
import styles from "./App.module.css";
import SimonButton from "./components/SimonButton"
import {getRandomInt} from "./util";

const COLORS = [
  "yellow",
  "blue",
  "red",
  "green",
];

function App() {
  const [activeColor, setActiveColor] = useState();
  const handleButtonClick = useCallback(color => {
    // setActiveColor(color);
    // setTimeout(() => setActiveColor(), 500);
    console.log(color);
  }, []);

  return (
    <main className={styles.app}>
      <SimonButton onClick={handleButtonClick} color={COLORS[0]} activeColor={activeColor}/>
      <SimonButton onClick={handleButtonClick} color={COLORS[1]} activeColor={activeColor}/>
      <SimonButton onClick={handleButtonClick} color={COLORS[2]} activeColor={activeColor}/>
      <SimonButton onClick={handleButtonClick} color={COLORS[3]} activeColor={activeColor}/>
    </main>
  );
}

export default App;
