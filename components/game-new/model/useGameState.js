import { GAME_SYMBOLS } from "../constants";
import { useState } from "react";
import { computeWinner } from "./computeWinner";
import { getNextMove } from "./getNextMove";

export function useGameState(playersCount) {
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(
    () => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: GAME_SYMBOLS.CROSS,
      playersTimeOver: [],
    }),
  );

  const winnerSequence = computeWinner(cells);

  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);

  const winnerSymbol =
    nextMove === currentMove ? currentMove : cells[winnerSequence?.[0]];

  const handleCellClick = (index) => {
    setGameState((prevState) => {
      if (prevState.cells[index]) return prevState;

      return {
        ...prevState,
        currentMove: getNextMove(
          prevState.currentMove,
          playersCount,
          prevState.playersTimeOver,
        ),
        cells: prevState.cells.map((cell, i) =>
          i === index ? prevState.currentMove : cell,
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((prevState) => {
      return {
        ...prevState,
        playersTimeOver: [...prevState.playersTimeOver, symbol],
        currentMove: getNextMove(
          prevState.currentMove,
          playersCount,
          prevState.playersTimeOver,
        ),
      };
    });
  };

  return {
    currentMove,
    nextMove,
    cells,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol,
  };
}
