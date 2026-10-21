import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

function Table({ titles, datas }) {
  return (
    <table className="w-full text-sm border-collapse rounded-xl">
      <TableHeader titles={titles} />
      <TableBody datas={datas} titles={titles} />
    </table>
  );
}

export default Table;
