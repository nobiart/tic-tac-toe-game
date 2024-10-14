import { getNextMove } from "./getNextMove";
import { GAME_SYMBOLS, MOVE_ORDER } from "../constants";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
  TICK: "tick",
};

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      if (state.cells[action.index]) return state;
      return {
        ...state,
        timers: updateTimers(state, action.now),
        currentMove: getNextMove(state),
        currentMoveStart: action.now,
        cells: updateCell(state, action.index),
      };
    }
    case GAME_STATE_ACTIONS.TICK: {
      if (!isTimeOver(state, action.now)) {
        return state;
      }

      return {
        ...state,
        timers: updateTimers(state, action.now),
        currentMove: getNextMove(state),
        currentMoveStart: action.now,
      };
    }
    default: {
      return state;
    }
  }
};

export const initialState = ({
  playersCount,
  defaultTimer,
  currentMoveStart,
}) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
  currentMoveStart,
  playersCount,
  timers: MOVE_ORDER.reduce((acc, symbol, index) => {
    if (index < playersCount) {
      acc[symbol] = defaultTimer;
    }

    return acc;
  }, {}),
});

function updateTimers(state, now) {
  const diff = now - state.currentMoveStart;
  const timer = state.timers[state.currentMove];

  return {
    ...state.timers,
    [state.currentMove]: timer - diff,
  };
}

function updateCell(state, index) {
  return state.cells.map((cell, i) => (i === index ? state.currentMove : cell));
}

function isTimeOver(state, now) {
  const timer = updateTimers(state, now)[state.currentMove];

  return timer <= 0;
}
