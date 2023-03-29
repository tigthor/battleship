# Battleship Game
This is a Battleship game built with React. The game consists of a 10x10 board with five ships of varying sizes placed randomly. The player must click on a cell to fire and try to sink all of the ships to win the game.

## Running the Game
To run the game, you must have Node.js and NPM (Node Package Manager) installed on your computer. Once you have installed Node.js and NPM, follow these steps:
1. Clone this repository to your computer.
2. Open a terminal or command prompt and navigate to the root directory of the cloned repository.
3. Run the command `yarn install` to install the necessary dependencies.
4. Run the command `yarn start` to start the development server.
5. Open a web browser and navigate to `http://localhost:3000` to play the game.


# Components

The Battleship game is made up of several React components, each with its own responsibility. Here's a brief explanation of each component:

* `App`: This is the main component that renders the entire game. It contains the game state and logic for handling game events, such as firing on the board and updating the score.
* `Board`: This component renders the game board and handles clicks on the board. It receives the board state and a callback function to handle clicks from the App component.
* `Cell`: This component renders a single cell on the game board. It receives the state of the cell (empty, hit, or miss) and an event handler to call when the cell is clicked.
* `ShipList`: This component renders the list of ships and their hit indicators. It receives the ship state and hit counts from the App component.
* `ShipItem`: This component renders a single ship and its hit indicators. It receives the ship data and hit count from the ShipList component.
* `HitIndicator`: This component renders a single hit indicator for a ship. It receives a boolean value indicating whether the hit indicator should be filled or not.
* `PlayerInfo`: This component renders the score and name for each player. It receives the player data from the App component.

Each of these components is responsible for rendering a specific part of the game and has its own set of props and responsibilities. By breaking the game down into these smaller components, the code is more modular and easier to maintain.# battleship
