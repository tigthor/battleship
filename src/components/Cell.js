import React from "react";

const Cell = ({ row, col, cellData, onClick }) => {
  const handleClick = () => {
    onClick(row, col);
  };

  return (
    <div className={`cell ${cellData}`} onClick={handleClick}>
      {cellData === "hit" && <img src="assets/Hit.png" alt="hit" />}
      {cellData === "miss" && <img src="assets/Miss.png" alt="miss" />}
    </div>
  );
};

export default Cell;
