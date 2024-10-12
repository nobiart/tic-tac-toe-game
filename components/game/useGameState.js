import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";
import { useState } from "react";

function getNextMove(currentMove) {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;

  return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}

export function useGameState() {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

  const nextMove = getNextMove(currentMove);

  const handleCellClick = (index) => {
    setGameState((prevState) => {
      if (prevState.cells[index]) return prevState;

      return {
        ...prevState,
        currentMove: getNextMove(prevState.currentMove),
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
  };
}
