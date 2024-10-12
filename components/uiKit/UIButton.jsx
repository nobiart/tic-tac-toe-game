import clsx from "clsx";

/**
 * @param {{
 * children,
 * className: string,
 * size: "lg" | "md",
 * type: "primary" | "outline",
 * }} props
 */

export function UIButton({ children, className, size, type }) {
  const buttonClasses = clsx(
    "transition-colors",
    className,
    {
      md: "rounded px-6 py-2 text-sm leading-tight",
      lg: "rounded-lg px-5 py-2 text-2xl leading-tight",
    }[size],
    {
      primary: "bg-teal-600 text-white hover:bg-teal-500",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[type],
  );

  return <button className={buttonClasses}>{children}</button>;
}
