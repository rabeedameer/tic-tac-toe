import React, {Component,Fragment} from 'react';

import Square from './Square';
import {setWinner} from './Square';
class Board extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     //squares: Array(9).fill(null), this does th same
  //     squares: [
  //     null,
  //     null,
  //     null,
  //     null,
  //     null,
  //     null,
  //     null,
  //     null,
  //     null
  //   ],
  //   xIsnext: true // this modifies the initial state
  //   }
  // }
  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({squares: squares,
    xIsNext: !this.state.xIsNext});// it flips xIsNext each time a player moves
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]}
      onClick={() =>
        this.handleClick(i)}
             />;
  }

  render() {
    const winner = setWinner(this.state.squares);
    let status;
    if (winner){
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' +
      (this.state.xIsNext ? 'X' : 'O');// here we called the function setWinner to check if the player has won => if yes, Winner X/O can be displayed
    }

    return (
      <Fragment>
        <div className="status h2 text-center">{status}</div>
        <div className="board">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
      </Fragment>
    );
  }
}


export default Board
