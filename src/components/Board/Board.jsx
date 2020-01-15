import React from "react";
import Pad from "../Pad";
import styles from "./Board.module.css";
import classnames from "classnames";

const COLORS = {
    "yellow": 0,
    "blue": 1,
    "red": 2,
    "green": 3,
  };

const Board = ({onPadClick, gameOver, selection}) => (
    <div className={classnames(styles.board, {[styles.gameOver]: gameOver})}>
      <Pad
        onClick={onPadClick}
        value={COLORS.yellow}
        color="yellow"
        active={selection === COLORS.yellow}
      />
      <Pad
        onClick={onPadClick}
        value={COLORS.blue}
        color="blue"
        active={selection === COLORS.blue}
      />
      <Pad
        onClick={onPadClick}
        value={COLORS.red}
        color="red"
        active={selection === COLORS.red}
      />
      <Pad
        onClick={onPadClick}
        value={COLORS.green}
        color="green"
        active={selection === COLORS.green}
      />
    </div>
);

export default Board;