import clsx from "clsx";
import { GameSymbol } from "./GameSymbol";
import { memo } from "react";

export const GameCell = memo(function GameCell({
  symbol,
  onClick,
  isWinner,
  disabled,
  index,
}) {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick(index)}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px",
        "flex items-center justify-center",
        isWinner && "bg-orange-600/10",
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
});
