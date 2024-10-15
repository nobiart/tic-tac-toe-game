import { UIFieldLabel } from "./UIFieldLabel";
import { UIFieldMessage } from "./UIFieldMessage";
import { UISelect } from "./UISelect";

/**
 * Select field component with label and error/helper message.
 *
 * @param {Object} props - The props object.
 * @param {string} props.label - The label text.
 * @param {boolean} props.required - Indicates if the field is required.
 * @param {string} props.helperText - The helper text.
 * @param {string} props.errorText - The error text.
 * @param {string} props.className - The additional CSS classes for the component.
 * @param {string[]} props.options - The array of select options.
 * @returns {JSX.Element} The select field component.
 */
export function UISelectField({
  label,
  required,
  helperText,
  errorText,
  className,
  options,
}) {
  return (
    <div className={className}>
      <UIFieldLabel label={label} required={required} />
      <UISelect className="mt-1" options={options} />
      <UIFieldMessage helperText={helperText} errorText={errorText} />
    </div>
  );
}
