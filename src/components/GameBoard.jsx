import { useState } from "react";

let startGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
// startGameBoard[1][1]

export function GameBoard({ onSelectSquare, board }) {
  // let gameBoard = startGameBoard;

  // for (const turn of gameTurns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;

  //   gameBoard[row][col] = player;
  // }

  // console.log("gameboard", gameBoard);
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>

    // <h1>tic-tac-e</h1>
  );
}
