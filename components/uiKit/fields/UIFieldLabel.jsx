import clsx from "clsx";

/**
 * Label component for UIFieldLabel.
 *
 * @param {{
 *   label: string,    // The label text.
 *   required: boolean // Indicates if the field is required.
 * }} props
 * @returns {JSX.Element|null} The label component.
 */
export function UIFieldLabel({ label, required }) {
  return (
    <label
      htmlFor=""
      className={clsx(
        required && "after:text-orange-600 after:content-['*']",
        "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5",
      )}
    >
      {label}
    </label>
  );
}
