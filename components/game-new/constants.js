import avatarSrc1 from "./ui/images/avatar-1.png";
import avatarSrc2 from "./ui/images/avatar-2.png";
import avatarSrc3 from "./ui/images/avatar-3.png";
import avatarSrc4 from "./ui/images/avatar-4.png";

export const GAME_SYMBOLS = {
  CROSS: "cross",
  ZERO: "zero",
  TRIANGLE: "triangle",
  SQUARE: "square",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

export const PLAYERS = [
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
