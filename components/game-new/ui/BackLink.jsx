import { ArrowLeftIcon } from "./icons/ArrowLeftIcon";
import Link from "next/link";

export function BackLink() {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 text-xs text-teal-600 leading-tight -mb-0.5"
    >
      <ArrowLeftIcon />
      Home
    </Link>
  );
}
