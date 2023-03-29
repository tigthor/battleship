import { BOARD_SIZE, SHIP_DATA } from "./constants";

export const createEmptyBoard = () => {
  const board = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    const newRow = [];
    for (let col = 0; col < BOARD_SIZE; col++) {
      newRow.push('empty');
    }
    board.push(newRow);
  }

  // Set ship positions on the board
  SHIP_DATA.layout.forEach((shipLayout) => {
    shipLayout.positions.forEach(([row, col]) => {
      board[row][col] = shipLayout.ship;
    });
  });

  return board;
};


export const initializeShips = () => {
  const ships = [];
  for (const ship in SHIP_DATA.shipTypes) {
    if (SHIP_DATA.shipTypes.hasOwnProperty(ship)) {
      ships.push({
        name: ship,
        size: SHIP_DATA.shipTypes[ship].size,
        positions: SHIP_DATA.layout.find((item) => item.ship === ship)
          .positions,
        hits: 0,
      });
    }
  }
  return ships;
};

export const updateBoard = (board, row, col, ships) => {
  const newBoard = [...board];
  const cell = newBoard[row][col];
  let updatedShips = ships;

  if (cell === "empty") {
    newBoard[row][col] = "miss";
  } else {
    const ship = ships.find((s) => s.name === cell);
    if (ship) {
      ship.hits++;
      updatedShips = ships.map((s) => (s.name === cell ? ship : s));
      newBoard[row][col] = "hit";
    }
  }
  return { newBoard, updatedShips };
};

export const checkGameOver = (ships) => {
  return ships.every((ship) => ship.hits === ship.size);
};

export const getShipImage = (shipName) => {
  switch (shipName) {
    case "carrier":
      return "Carrier_Shape.png";
    case "battleship":
      return "Battleship_shape.png";
    case "cruiser":
      return "Cruiser_Shape.png";
    case "submarine":
      return "Submarine.png";
    case "destroyer":
      return "Destroyer_Shape.png";
    default:
      return "";
  }
};
