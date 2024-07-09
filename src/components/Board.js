import React, { useState } from 'react';
import Square from './Square';
import './Board.css';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (calculateWinner(squares) || squares[index]) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Player ${winner === 'X' ? '2' : '1'} won!`;
  } else if (squares.every(square => square !== null)) {
    status = 'It\'s a tie!';
  } else {
    status = `Next player: ${isXNext ? '1 (X)' : '2 (✓)'}`;
  }

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button className="reset" onClick={() => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
      }}>RESET</button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;


export default Board;
