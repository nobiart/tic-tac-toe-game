export function computePlayerTimer(state, playerSymbol) {
  return {
    timer: state.timers[playerSymbol],
    timerStartAt:
      playerSymbol === state.currentMove ? state.currentMoveStart : undefined,
  };
}
