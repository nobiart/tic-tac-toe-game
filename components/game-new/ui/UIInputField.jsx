import clsx from "clsx";

/**
 * @param {{
 *   label?: string
 *   required: boolean
 *   helperText?: string
 *   errorMessage?: string
 *   className?: string
 * } & import("react").HTMLAttributes<HTMLInputElement>} props
 */
export function UIInputField({
  label,
  required = false,
  helperText,
  errorMessage,
  className,
  ...inputProps
}) {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={inputProps.id ?? ""}
          className={clsx(
            required && "after:text-orange-600 after:content-['*']",
            "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5",
          )}
        >
          {label}
        </label>
      )}
      <input
        type={inputProps.type ?? "text"}
        id={inputProps.id ?? ""}
        required={required}
        className={clsx(
          "px-3 py-2 block w-full shadow-sm text-sm leading-tight",
          "rounded-md border  outline-0",
          "focus:ring-opacity-50 disabled:cursor-not-allowed",
          "disabled:bg-gray-50 disabled:text-gray-500",
          errorMessage
            ? "border-orange-600 focus:border-orange-600 focus:ring focus:ring-orange-600/20"
            : "border-slate-200 focus:border-teal-600 focus:ring focus:ring-teal-600/20",
        )}
        {...inputProps}
      />
      {(helperText || errorMessage) && (
        <p
          className={clsx(
            "mt-1 text-xs",
            errorMessage ? "text-orange-600" : "text-slate-400",
          )}
        >
          {errorMessage ?? helperText}
        </p>
      )}
    </div>
  );
}
