import React from "react";
import Board from "./components/Board"
import {generateSequence} from "./util";

const after500ms = fn => setTimeout(fn, 500);

const PLAYERS = {
  player: "player",
  computer: "computer",
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sequence: generateSequence(16),
      selection: null,
      turnCount: 0,
      gameOver: false,
      player: PLAYERS.computer,
      sequenceIndex: 0
    };
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        selection: this.state.sequence[0],
      })
    }, 1000);
  }

  componentDidUpdate(){
    const {gameOver, sequence, selection, sequenceIndex, player, turnCount} = this.state;
    const noSelection = { selection: null };

    if (gameOver && selection !== null) {
      after500ms(() => this.setState(noSelection));
    } else if (player === PLAYERS.player){
      if (selection !== null) {
        if (selection === sequence[sequenceIndex]){
          // win
          if (turnCount === sequence.length) {
            after500ms(() => {
              this.setState({
                ...noSelection,
                gameOver: true
              })
            });
          }
          // last item in current sequence
          else if(sequenceIndex === turnCount){
            after500ms(() => {
              this.setState({
                ...noSelection,
                turnCount: turnCount + 1,
                sequenceIndex: 0,
                player: PLAYERS.computer,
              });
            });
          // next step
          } else {
            after500ms(() => {
              this.setState({
                ...noSelection,
                sequenceIndex: sequenceIndex + 1,
              });
            });
          }
          // lose
        } else {
          after500ms(() => {
            this.setState({
              ...noSelection,
              gameOver: true,
            });
          });
        }
      }
    } else if (player === PLAYERS.computer){
      // not at the end
      if (sequenceIndex <= turnCount) {
        if (selection !== null) {
          after500ms(() => this.setState({...noSelection, sequenceIndex: sequenceIndex + 1}))
        } else {
          after500ms(() => this.setState({ selection: sequence[sequenceIndex]}));
        }
      // at the end
      } else {
        this.setState({
          ...noSelection,
          player: PLAYERS.player,
          sequenceIndex: 0,
        });
      }
    }
  }

  onPadClick = selection => this.setState({selection})

  render(){
    return (
      <Board
        onPadClick={this.onPadClick}
        gameOver={this.state.gameOver}
        selection={this.state.selection}
      />
    );
  }
}

export default App;
