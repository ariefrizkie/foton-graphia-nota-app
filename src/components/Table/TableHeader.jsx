import { color } from "../../utils/dataColorLight";

function TableHeader({ titles }) {
  return (
    <thead>
      <tr
        className={`border-b ${color.border} text-xs font-medium ${color.textMuted} text-left`}
      >
        {titles.map((title, index) => (
          <th
            key={title.name || index}
            className={`py-3 px-4 bg-light-surface-alt/40 dark:bg-dark-surface-alt/50 ${title.style}`}
          >
            {title.name}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
