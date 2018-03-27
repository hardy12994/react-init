import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Stock } from "./stocks";

function chooseWinner(squares) {

  const winList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (var index = 0; index <= winList.length - 1; index++) {
    let winLine = winList[index];

    if (squares[winLine[0]] && squares[winLine[0]] === squares[winLine[1]] && squares[winLine[1]] === squares[winLine[2]]) {
      return winLine;
    }

  }

  return null;
}




class BoardBox extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <button className="square" onClick={this.props.onClick}>{this.props.value}</button>
    );
  }
}



class Board extends React.Component {


  constructor() {
    super();
  }

  renderSquare(boxIndex) {
    return (
      <BoardBox value={this.props.squares[boxIndex]} onClick={() => this.props.onClick(boxIndex)} />
    );
  }



  render() {
    return (<div>

      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>

    </div>);
  }
}



class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      xisNext: true,
      history: [{
        squareBoxes: Array(9).fill(null)
      }],
      stepNumber: 0
    };
  }

  handleClick(indexClicked) {

    var squares = this.state.history[this.state.history.length - 1].squareBoxes.slice(0); // latest in history

    if (squares[indexClicked] || chooseWinner(squares)) return;

    squares[indexClicked] = this.state.xisNext ? "X" : "0";

    this.setState({
      xisNext: !this.state.xisNext,
      history: this.state.history.concat({
        squareBoxes: squares
      }),
      stepNumber: this.state.history.length
    });

  }



  backInStep(step) {

    this.setState({
      stepNumber: step,
      xisNext: step % 2 === 0
    });
  }

  render() {


    var current = this.state.history[this.state.stepNumber].squareBoxes;

    var winner = chooseWinner(current);

    var status = (this.state.xisNext ? "X" : "0") + " Chance";

    if (winner) {
      status = <b>{"HURREY !!! " + (this.state.xisNext ? "| 0 |" : "| X |") + " is WINNER"}</b>;
    }


    var steps = this.state.history.map((item, index) => {
      const description = index ?
        "Go to move #" + index :
        "Go to game start";

      return (
        <li key={index}>
          <button onClick={() => this.backInStep(index)} >{description}</button>
        </li>
      );
    });





    return (
      <div className="shift">
        <span>
          <h3>Tic - Tac - Toe</h3>
        </span>

        <div className="game">

          <div className="game-board">
            <Board
              onClick={i => this.handleClick(i)}
              squares={this.state.history[this.state.stepNumber].squareBoxes} />
          </div>

          <div className="game-info">
            <div>{status}</div>
          </div>

        </div>
        <div>
          <h4>Steps History</h4>

          <ol>{steps}</ol>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<Game />, document.getElementById("root"));
ReactDOM.render(<Stock />, document.getElementById("root"));
