import { MOVE_ORDER } from "../constants";

export function getNextMove({ currentMove, playersCount, timers }) {
  const slicedOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => timers[symbol] > 0,
  );
  const nextMoveIndex = slicedOrder.indexOf(currentMove) + 1;

  return slicedOrder[nextMoveIndex] ?? slicedOrder[0];
}
