import { MOVE_ORDER } from "./constants";

export function getNextMove(currentMove, playersCount, playersTimeOver) {
  const slicedOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (s) => !playersTimeOver.includes(s),
  );
  const nextMoveIndex = slicedOrder.indexOf(currentMove) + 1;

  return slicedOrder[nextMoveIndex] ?? slicedOrder[0];
}

export function computeWinner(cells, sequenceSize = 5, fieldSize = 19) {
  const gap = Math.floor(sequenceSize / 2);

  function compareElements(indexes) {
    let result = true;

    for (let i = 1; i < indexes.length; i++) {
      result &&= !!cells[indexes[i]];
      result &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }

    return result;
  }

  function getSequenceIndexes(index) {
    const res = [
      [], // -
      [], // \
      [], // /
      [], // |
    ];
    for (let i = 0; i < sequenceSize; i++) {
      res[0].push(i - gap + index);
      res[1].push(fieldSize * (i - gap) + (i - gap) + index);
      res[2].push(-fieldSize * (i - gap) + (i - gap) + index);
      res[3].push(fieldSize * (i - gap) + index);
    }

    const x = index % fieldSize;

    if (x < gap || x >= fieldSize - gap) {
      res.shift();
      res.shift();
      res.shift();
    }

    return res;
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getSequenceIndexes(i);
      const winnerIndexes = indexRows.find((row) => compareElements(row));

      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }

  return undefined;
}
