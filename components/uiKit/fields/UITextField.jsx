import { UIFieldLabel } from "./UIFieldLabel";
import { UIInputField } from "./UIInputField";
import { UIFieldMessage } from "./UIFieldMessage";

/**
 * Text field component with label and error/helper message.
 *
 * @param {{
 *   label: string,             // The label text.
 *   required: boolean,         // Indicates if the field is required.
 *   helperText: string,        // The helper text.
 *   errorText: string,         // The error text.
 *   className: string,         // The additional CSS classes for the component.
 * } & import('react').HTMLAttributes<HTMLInputElement>  } props
 * @returns {JSX.Element} The text field component.
 */
export function UITextField({
  label,
  required,
  helperText,
  errorText,
  className,
  ...inputProps
}) {
  return (
    <div className={className}>
      <UIFieldLabel label={label} required={required} />
      <UIInputField required={required} errorText={errorText} {...inputProps} />
      <UIFieldMessage helperText={helperText} errorText={errorText} />
    </div>
  );
}
