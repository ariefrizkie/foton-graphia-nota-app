import { color } from "../../utils/dataColorLight";

function Label({ label, hFor }) {
  return (
    <label
      htmlFor={hFor}
      className={`text-xs font-semibold ${color.textMuted}`}
    >
      {label}
    </label>
  );
}

export default Label;
