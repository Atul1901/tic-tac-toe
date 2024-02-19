let startGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function GameBoard() {
  return (
    <ol id="game-board">
      {startGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
