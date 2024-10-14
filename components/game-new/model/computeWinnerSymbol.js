export function computeWinnerSymbol(state, { winnerSequence, nextMove }) {
  return nextMove === state.currentMove
    ? state.currentMove
    : state.cells[winnerSequence?.[0]];
}
