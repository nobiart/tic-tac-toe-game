import Link from "next/link";
import { ArrowLeftIcon } from "./icons/ArrowLeftIcon";
import { StarIcon } from "./icons/StarIcon";
import { UserIcon } from "./icons/UserIcon";
import { HistoryIcon } from "./icons/HistoryIcon";

export function GameTitle({ playersCount }) {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5"
      >
        <ArrowLeftIcon />
        Home
      </Link>
      <h1 className="text-4xl leading-tight">Tic Tac Toe Game</h1>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon />
          {playersCount}
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon /> 1 minute for turn
        </div>
      </div>
    </div>
  );
}
