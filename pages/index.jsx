import { Header } from "../components/header";
import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from "../components/game";
import { useState } from "react";
import { GameSymbol } from "../components/game/GameSymbol";

export default function HomePage() {
  const [playersCount] = useState(4);
  const {
    currentMove,
    nextMove,
    cells,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol,
  } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          handlePlayerTimeOver={handlePlayerTimeOver}
          className="mt-4"
        />
        {winnerSymbol && (
          <div className="my-4">
            <GameSymbol symbol={winnerSymbol} />
          </div>
        )}
        <GameField
          currentMove={currentMove}
          nextMove={nextMove}
          cells={cells}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
          className="mt-6"
        />
      </main>
    </div>
  );
}
