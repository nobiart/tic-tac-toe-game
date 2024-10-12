import { GAME_SYMBOLS } from "./constants";
import { CrossIcon } from "./icons/CrossIcon";
import { ZeroIcon } from "./icons/ZeroIcon";
import { TriangleIcon } from "./icons/TriangleIcon";
import { SquareIcon } from "./icons/SquareIcon";

export function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.ZERO]: ZeroIcon,
      [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
}
