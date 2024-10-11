import { SYMBOL_O, SYMBOL_X } from "./constants";
import { clsx } from "clsx";

export function GameSymbol({ symbol }) {
  return (
    <span
      className={clsx("text-xl", {
        [SYMBOL_O]: "text-green-400",
        [SYMBOL_X]: "text-red-400",
      })}
    >
      {symbol}
    </span>
  );
}
