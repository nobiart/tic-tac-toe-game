import { GAME_SYMBOLS } from "./constants";
import { useState } from "react";
import { computeWinner, getNextMove } from "./model";

export function useGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const winnerSequence = computeWinner(cells);

  const nextMove = getNextMove(currentMove, playersCount);

  const handleCellClick = (index) => {
    setGameState((prevState) => {
      if (prevState.cells[index]) return prevState;

      return {
        ...prevState,
        currentMove: getNextMove(prevState.currentMove, playersCount),
        cells: prevState.cells.map((cell, i) =>
          i === index ? prevState.currentMove : cell,
        ),
      };
    });
  };

  return {
    currentMove,
    nextMove,
    cells,
    handleCellClick,
    winnerSequence,
  };
}
