import React from 'react';
import Cell from './Cell';

const Board = ({ boardData, handleCellClick }) => {
  return (
    <div className="board">
      {boardData.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              row={rowIndex}
              col={colIndex}
              cellData={cell}
              onClick={handleCellClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;