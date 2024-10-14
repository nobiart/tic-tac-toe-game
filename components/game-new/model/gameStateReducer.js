import { getNextMove } from "./getNextMove";
import { GAME_SYMBOLS } from "../constants";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
};

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      if (state.cells[action.index]) return state;
      return {
        ...state,
        currentMove: getNextMove(state),
        cells: state.cells.map((cell, i) =>
          i === action.index ? state.currentMove : cell,
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export const initialState = ({ playersCount }) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
  playersCount,
});
