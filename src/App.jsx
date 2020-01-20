import React, {useState, useEffect} from "react";
import Pad from "./components/Pad"
import {generateSequence} from "./util";
import classnames from "classnames";
import styles from "./App.module.css";

const after500ms = fn => setTimeout(fn, 500);

const GAME_STATES = {
  running: 'running',
  lose: 'lose',
  win: 'win',
};

const PLAYERS = {
  player: "player",
  computer: "computer",
};

const COLORS = {
  "yellow": 0,
  "blue": 1,
  "red": 2,
  "green": 3,
};

const App = () => {
  const [sequence, setSequence] = useState([]);
  const [selection, setSelection] = useState(null);
  const [turnCount, setTurnCount] = useState(0);
  const [gameState, setGameState] = useState();
  const [player, setPlayer] = useState();
  const [sequenceIndex, setSequenceIndex] = useState(0);

  const reset = () => {
    const newSequence = generateSequence(16);
    setGameState(GAME_STATES.running);
    setSequence(newSequence);
    setSequenceIndex(0);
    setTurnCount(0);
    setPlayer(PLAYERS.computer);
  };

  // componentDidMount
  useEffect(() => {
    setTimeout(reset, 1000);
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if ((gameState === GAME_STATES.lose || gameState === GAME_STATES.win) && selection !== null) {
      after500ms(() => {
        setSelection(null);
        after500ms(reset);
      });
    }
    else if (player === PLAYERS.player){
      if (selection !== null) {
        if (selection === sequence[sequenceIndex]){
          // win
          if (sequenceIndex === sequence.length - 1) {
            after500ms(() => {
              setSelection(null);
              setGameState(GAME_STATES.win);
              setPlayer();
            });
          }
          // last item in current sequence
          else if(sequenceIndex === turnCount){
            after500ms(() => {
              setSelection(null);
              setTurnCount(turnCount + 1);
              setSequenceIndex(0);
              setPlayer(PLAYERS.computer);
            });
          // next step
          } else {
            after500ms(() => {
              setSelection(null);
              setSequenceIndex(sequenceIndex + 1);
            });
          }
          // lose
        } else {
          after500ms(() => {
            setSelection(null);
            setGameState(GAME_STATES.lose);
          });
        }
      }
    }
    else if (player === PLAYERS.computer){
      // not at the end
      if (sequenceIndex <= turnCount) {
        if (selection !== null) {
          after500ms(() => {
            setSelection(null);
            setSequenceIndex(sequenceIndex + 1);
          })
        } else {
          after500ms(() => setSelection(sequence[sequenceIndex]));
        }
      // at the end
      } else {
        after500ms(() => {
          setSelection(null);
          setPlayer(PLAYERS.player);
          setSequenceIndex(0);
        });
      }
    }
  }, [selection, player, sequenceIndex, sequence, gameState, turnCount]);

  return (
    <div className={classnames(
      styles.board, {
        [styles.lose]: gameState === GAME_STATES.lose,
        [styles.win]: gameState === GAME_STATES.win,
      })}
    >
      <Pad
        onClick={setSelection}
        value={COLORS.yellow}
        color="yellow"
        active={selection === COLORS.yellow}
      />
      <Pad
        onClick={setSelection}
        value={COLORS.blue}
        color="blue"
        active={selection === COLORS.blue}
      />
      <Pad
        onClick={setSelection}
        value={COLORS.red}
        color="red"
        active={selection === COLORS.red}
      />
      <Pad
        onClick={setSelection}
        value={COLORS.green}
        color="green"
        active={selection === COLORS.green}
      />
    </div>
  );
}

export default App;
