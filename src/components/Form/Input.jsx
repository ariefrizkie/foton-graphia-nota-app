import { color } from "../../utils/dataColorLight";

function Input({ type, id, placeholder, style, value }) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={`${style} ${color.bgSurface} border ${color.border} rounded-lg px-1.5 py-2 text-sm ${color.text} focus:outline-2 ${color.focus} focus:border-0`}
      value={value || ""}
    />
  );
}

export default Input;
