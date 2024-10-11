import { GameSymbol } from "./GameSymbol";
import { clsx } from "clsx";

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        "border border-gray-400 -ml-px -mt-px flex items-center justify-center bg-transparent",
        isWinner && "bg-red-400",
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
