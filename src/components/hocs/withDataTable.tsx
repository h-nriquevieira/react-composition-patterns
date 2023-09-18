import { useEffect, useState } from "react";
import { fetchMockData } from "../../service/fetchMockData";
import { User } from "../../types/User";
import { DataTableProps } from "../../types/DataTableProps";

export default function withDataTable(
  Component: React.ComponentType<DataTableProps>
) {
  return () => {
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
      <Component
        data={filteredData}
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
    );
  };
}
