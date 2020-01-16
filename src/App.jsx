import React, {useState, useEffect, useCallback} from "react";
import Board from "./components/Board"
import {generateSequence} from "./util";

const PLAYERS = {
  player: "player",
  computer: "computer",
};

const App = () => {
  const [sequence] = generateSequence(16);
  const [selection, setSelection] = useState(null);
  const [turnCount, setTurnCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [player, setPlayer] = useState(PLAYERS.computer);
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [countdownTimer, setCoundownTimer] = useState();

  return (
    <Board
      onPadClick={this.onPadClick}
      gameOver={this.state.gameOver}
      selection={this.state.selection}
    />
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sequence: generateSequence(16),
//       selection: null,
//       turnCount: 0,
//       gameOver: false,
//       player: PLAYERS.computer,
//       sequenceIndex: 0
//     }

//     this.countDownTimer = null;
//   }

//   componentDidMount(){
//     setTimeout(this.playSequence, 1000);
//   }

//   resetCountdownTimer = () => {
//     this.countDownTimer = setTimeout(() => {
//       this.setState({gameOver: true});
//     }, 3000)
//   }

//   playSequence = () => {
//     const {sequenceIndex, turnCount, sequence} = this.state;

//     if (sequenceIndex <= turnCount) {
//         this.setState({selection: sequence[sequenceIndex]}, () => {
//           setTimeout(() => {
//             this.setState({
//               selection: null,
//               sequenceIndex: sequenceIndex + 1
//             }, () => {
//               setTimeout(this.playSequence,500);
//             });
//           }, 500);
//         })
//     } else {
//       this.setState({
//         player: PLAYERS.player,
//         sequenceIndex: 0,
//         selection: null,
//       }, () => {
//         this.resetCountdownTimer();
//       });
//     }
//   }

//   onPadClick = selection => {
//     clearInterval(this.countDownTimer);
//     const {player, gameOver, sequence, sequenceIndex, turnCount} = this.state;

//     this.setState({selection}, () => {
//       setTimeout(() => this.setState({selection: null}), 500);
//     });

//     if (player !== PLAYERS.computer && !gameOver){
//       if (selection === sequence[sequenceIndex]){
//         if (turnCount === sequence.length) {
//           console.log("you win!");
//         }
//         else if(sequenceIndex === turnCount){
//           this.setState({
//             turnCount: turnCount + 1,
//             sequenceIndex: 0,
//             player: PLAYERS.computer,
//           }, () => setTimeout(this.playSequence, 1000))
//         } else {
//           this.setState({
//             sequenceIndex: sequenceIndex + 1,
//           });
//         }
//       } else {
//         this.setState({gameOver: true});
//       }
//     }
//   };

//   render(){
//     return (
//       <Board
//         onPadClick={this.onPadClick}
//         gameOver={this.state.gameOver}
//         selection={this.state.selection}
//       />
//     );
//   }
// }

export default App;
