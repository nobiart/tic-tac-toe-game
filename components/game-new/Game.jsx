import { GameLayout } from "./ui/GameLayout";
import { BackLink } from "./ui/BackLink";
import { GameTitle } from "./ui/GameTitle";
import { GameInfo } from "./ui/GameInfo";
import { PLAYERS } from "./constants";
import { PlayerInfo } from "./ui/PlayerInfo";
import { GameMoveInfo } from "./ui/GameMoveInfo";
import { GameCell } from "./ui/GameCell";
import { GameOverModal } from "./ui/GameOverModal";
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initialState,
} from "./model/gameStateReducer";
import { useReducer } from "react";
import { computeWinner } from "./model/computeWinner";
import { getNextMove } from "./model/getNextMove";
import { computeWinnerSymbol } from "./model/computeWinnerSymbol";
import { computePlayerTimer } from "./model/computePlayerTimer";
import { useInterval } from "../hooks/useInterval";

const PLAYERS_COUNT = 4;
const GAME_TIMER = 60000;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    {
      playersCount: PLAYERS_COUNT,
      defaultTimer: GAME_TIMER,
      currentMoveStart: Date.now(),
    },
    initialState,
  );

  useInterval(1000, gameState.currentMoveStart, () => {
    dispatch({
      type: GAME_STATE_ACTIONS.TICK,
      now: Date.now(),
    });
  });

  const winnerSequence = computeWinner(gameState.cells);
  const nextMove = getNextMove(gameState);
  const winnerSymbol = computeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });
  const winnerPlayer = PLAYERS.find((p) => p.symbol === winnerSymbol);

  const { currentMove, cells } = gameState;

  return (
    <>
      <GameLayout
        backlink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo
            isRatingGame
            playersCount={PLAYERS_COUNT}
            timeMode={"1 minute for click"}
          />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((p, i) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            p.symbol,
          );

          return (
            <PlayerInfo
              key={p.id}
              avatar={p.avatar}
              name={p.name}
              rating={p.rating}
              symbol={p.symbol}
              timer={timer}
              timerStartAt={timerStartAt}
              isRight={i % 2 === 1}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, i) => (
          <GameCell
            key={i}
            symbol={cell}
            disabled={!!winnerSymbol}
            isWinner={winnerSequence?.includes(i)}
            onClick={() => {
              dispatch({
                type: GAME_STATE_ACTIONS.CELL_CLICK,
                index: i,
                now: Date.now(),
              });
            }}
          />
        ))}
      />
      <GameOverModal
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((p, i) => (
          <PlayerInfo
            key={p.id}
            avatar={p.avatar}
            name={p.name}
            rating={p.rating}
            symbol={p.symbol}
            timer={gameState.timers[p.symbol]}
            isRight={i % 2 === 1}
          />
        ))}
        winnerName={winnerPlayer?.name}
      />
    </>
  );
}
