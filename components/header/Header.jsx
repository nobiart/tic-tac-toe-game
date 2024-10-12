import Image from "next/image";
import logoSrc from "./logo.svg";
import { Profile } from "../profile";
import { ArrowDownIcon } from "./icons/ArrowDownIcon";
import { UIButton } from "../uiKit/UIButton";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="Logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UIButton size="lg" type="primary" className="w-44">
        Play
      </UIButton>
      <button className="ml-auto flex items-center gap-2 text-teal-600">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
