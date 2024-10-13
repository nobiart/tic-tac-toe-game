import { GameLayout } from "./ui/GameLayout";
import { BackLink } from "./ui/BackLink";
import { GameTitle } from "./ui/GameTitle";
import { GameInfo } from "./ui/GameInfo";
import { PLAYERS } from "./constants";
import { PlayerInfo } from "./ui/PlayerInfo";
import { GameMoveInfo } from "./ui/GameMoveInfo";
import { useGameState } from "./model/useGameState";
import { GameCell } from "./ui/GameCell";
import { GameOverModal } from "./ui/GameOverModal";

const PLAYERS_COUNT = 4;

export function Game() {
  const {
    cells,
    winnerSymbol,
    winnerSequence,
    handleCellClick,
    currentMove,
    nextMove,
  } = useGameState(PLAYERS_COUNT);

  const winnerPlayer = PLAYERS.find((p) => p.symbol === winnerSymbol);

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
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((p, i) => (
          <PlayerInfo
            key={p.id}
            avatar={p.avatar}
            name={p.name}
            rating={p.rating}
            symbol={p.symbol}
            seconds={60}
            isRight={i % 2 === 1}
          />
        ))}
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
              handleCellClick(i);
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
            seconds={60}
            isRight={i % 2 === 1}
          />
        ))}
        winnerName={winnerPlayer?.name}
      />
    </>
  );
}
