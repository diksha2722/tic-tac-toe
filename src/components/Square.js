import React from 'react';
import './Square.css';

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value === 'X' ? '✕' : value === 'O' ? '✓' : null}
    </button>
  );
}

export default Square;
