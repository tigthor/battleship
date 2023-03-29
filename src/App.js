import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Board from "./components/Board";
import ShipList from "./components/ShipList";
import PlayerInfo from "./components/PlayerInfo";
import {
  createEmptyBoard,
  initializeShips,
  updateBoard,
  checkGameOver,
} from "./util/helpers";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const initialBoard = createEmptyBoard();
  const initialShips = initializeShips();

  const [state, setState] = useState({
    boardData: initialBoard,
    ships: initialShips,
    playerData: [
      {score: 0 , name: "Player 1"},
      {score: 0 , name: "Player 2"},
    ],
  });

  const handleCellClick = (row, col) => {
    const { newBoard, updatedShips } = updateBoard(state.boardData, row, col, state.ships);
    const cell = state.boardData[row][col];
    const isGameOver = checkGameOver(updatedShips);
  
    if (cell === 'empty') {
      toast.error('Miss!');
    } else {
      const shipIndex = updatedShips.findIndex((s) => s.name === cell);
      if (shipIndex !== -1) {
        const ship = updatedShips[shipIndex];
        if (ship.hits === ship.size) {
          toast.success(`Sunk ${ship.name}!`);
        } else {
          toast.info('Hit!');
        }
      }
    }
  
    if (isGameOver) {
      toast.success('Game Over! All ships have been sunk.', {
        onClose: () => {
          alert('Game Over! All ships have been sunk.');
        },
      });
    }
    setState({ ...state, boardData: newBoard, ships: updatedShips });
  };
  

  return (
    <div className="app">
      <ToastContainer />
      <div className="game-info">
        <PlayerInfo playerData={state.playerData} />
        <ShipList ships={state.ships} />
      </div>
      <Board boardData={state.boardData} handleCellClick={handleCellClick} />
    </div>
  );
};

export default App;
