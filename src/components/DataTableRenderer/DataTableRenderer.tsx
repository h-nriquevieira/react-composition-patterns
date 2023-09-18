import { useEffect, useState } from "react";
import { fetchMockData } from "../../service/fetchMockData";
import { User } from "../../types/User";
import { DataTableProps } from "../../types/DataTableProps";

type DataTableRendererProps = {
  render: (props: DataTableProps) => React.ReactNode;
};

export default function DataTableRenderer({ render }: DataTableRendererProps) {
  const [data, setData] = useState<User[]>([]);
  const [filter, setFilter] = useState("");

  const filteredData =
    filter && data
      ? [
          ...data.filter((item) =>
            item.name.toLocaleLowerCase().startsWith(filter)
          ),
        ]
      : [...(data ?? [])];

  function handleFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilter(e.target.value.toLocaleLowerCase());
  }

  useEffect(() => {
    (async () => {
      const res = await fetchMockData();
      setData(res);
    })();
  }, []);

  return (
    <>
      {render({
        data: filteredData,
        filter,
        handleFilterChange,
      })}
    </>
  );
}
