import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";
import { useState } from "react";

function getNextMove(currentMove, playersCount) {
  const slicedOrder = MOVE_ORDER.slice(0, playersCount);
  const nextMoveIndex = slicedOrder.indexOf(currentMove) + 1;

  return slicedOrder[nextMoveIndex] ?? slicedOrder[0];
}

export function useGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.CROSS,
  }));

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
  };
}
