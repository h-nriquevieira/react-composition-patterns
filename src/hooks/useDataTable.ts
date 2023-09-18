import { useEffect, useState } from "react";
import { User } from "../types/User";
import { fetchMockData } from "../service/fetchMockData";

export default function useDataTable() {
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

  return {
    data: filteredData,
    filter,
    handleFilterChange,
  };
}
