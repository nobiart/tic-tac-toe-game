import clsx from "clsx";
import { Profile } from "../profile";
import { GameSymbol } from "../game-new/ui/GameSymbol";
import { GAME_SYMBOLS } from "../game-new/constants";
import avatarSrc1 from "../game-new/ui/images/avatar-1.png";
import avatarSrc2 from "../game-new/ui/images/avatar-2.png";
import avatarSrc3 from "../game-new/ui/images/avatar-3.png";
import avatarSrc4 from "../game-new/ui/images/avatar-4.png";
import { useEffect, useState } from "react";

const players = [
  {
    id: 1,
    name: "John Doe",
    rating: "1435",
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: 2,
    name: "Sarah Connor",
    rating: "4321",
    avatar: avatarSrc2,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 3,
    name: "Julia Roberts",
    rating: "1367",
    avatar: avatarSrc3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "Will Smith",
    rating: "1456",
    avatar: avatarSrc4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];

export function GameInfo({
  className,
  playersCount,
  currentMove,
  isWinner,
  handlePlayerTimeOver,
}) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3",
      )}
    >
      {players.slice(0, playersCount).map((p, i) => (
        <PlayerInfo
          key={p.id}
          playerInfo={p}
          onTimeOver={() => handlePlayerTimeOver(p.symbol)}
          isRight={i % 2 === 1}
          isTimerRunning={currentMove === p.symbol && !isWinner}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRunning, onTimeOver }) {
  const [seconds, setSeconds] = useState(6);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((prev) => Math.max(prev - 1, 0));
      }, 1000);

      return () => {
        clearInterval(interval);
        setSeconds(6);
      };
    }
  }, [isTimerRunning]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }

    return "text-slate-400";
  };

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div
        className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")}
      ></div>
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor(),
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
