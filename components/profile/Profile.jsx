import Image from "next/image";
import avatarSrc from "./avatar.png";
import clsx from "clsx";

export function Profile({ className }) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-2 text-start text-teal-600",
      )}
    >
      <Image
        className="rounded-full"
        width={48}
        height={48}
        src={avatarSrc}
        alt="Avatar"
        unoptimized
      />
      <div>
        <div className="text-lg leading-tight">Username</div>
        <div className="text-slate-400 text-xs leading-tight">Rating: 123</div>
      </div>
    </div>
  );
}
