import clsx from "clsx";
import { GameSymbol } from "./GameSymbol";

export function GameCell({ symbol, onClick, isWinner, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px",
        "flex items-center justify-center",
        isWinner && "bg-orange-600/10",
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
}
