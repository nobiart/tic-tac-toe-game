import { MOVE_ORDER } from "../constants";

export function getNextMove({ currentMove, playersCount }) {
  const slicedOrder = MOVE_ORDER.slice(0, playersCount);
  const nextMoveIndex = slicedOrder.indexOf(currentMove) + 1;

  return slicedOrder[nextMoveIndex] ?? slicedOrder[0];
}
