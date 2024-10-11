import { GameInfo } from "./GameInfo";
import { useGameState } from "./useGameState";
import { GameCell } from "./GameCell";
import { ResetButton } from "./ResetButton";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    resetGame,
    toggleCell,
    getWinnerCell,
  } = useGameState();

  return (
    <div className="flex flex-col items-center w-40 mx-auto my-24 p-4 border border-black">
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={getWinnerCell(index)}
            onClick={() => toggleCell(index)}
          />
        ))}
      </div>
      <ResetButton onClick={resetGame} />
    </div>
  );
}
