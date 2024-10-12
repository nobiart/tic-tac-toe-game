import clsx from "clsx";
import { ZeroIcon } from "./icons/ZeroIcon";
import { CrossIcon } from "./icons/CrossIcon";
import { UIButton } from "../uiKit/UIButton";

const cells = new Array(19 * 19).fill(null);

export function GameField({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="mr-auto">
          <div className="flex items-center gap-1 text-xl leading-tight font-semibold">
            Turn: <ZeroIcon className="w-5 h-5" />
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-400 leading-tight">
            Next turn: <CrossIcon />
          </div>
        </div>
        <UIButton size="md" type="primary">
          Draw
        </UIButton>
        <UIButton size="md" type="outline">
          Give Up
        </UIButton>
      </div>
      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
        {cells.map((_, i) => (
          <button
            key={i}
            className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
          >
            <CrossIcon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
}
