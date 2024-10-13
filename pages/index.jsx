import { Header } from "../components/header";
import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from "../components/game";
import { useState } from "react";
import { GameSymbol } from "../components/game/GameSymbol";
import { UIModal } from "../components/uiKit/UIModal";
import { UIButton } from "../components/uiKit/UIButton";

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
        <UIModal
          width="md"
          isOpen={!!winnerSymbol}
          onClose={() => console.log("closed")}
        >
          <UIModal.Header>Modal Header</UIModal.Header>
          <UIModal.Body>
            <div className="text-sm">
              Winner: <span className="text-green-600">Username</span>
            </div>
          </UIModal.Body>
          <UIModal.Footer>
            <UIButton size="md" type="outline">
              Back
            </UIButton>
            <UIButton size="md" type="primary">
              Play Again
            </UIButton>
          </UIModal.Footer>
        </UIModal>
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
