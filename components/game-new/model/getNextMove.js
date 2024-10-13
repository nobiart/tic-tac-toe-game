import { MOVE_ORDER } from "../constants";

export function getNextMove(currentMove, playersCount, playersTimeOver) {
  const slicedOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (s) => !playersTimeOver.includes(s),
  );
  const nextMoveIndex = slicedOrder.indexOf(currentMove) + 1;

  return slicedOrder[nextMoveIndex] ?? slicedOrder[0];
}
