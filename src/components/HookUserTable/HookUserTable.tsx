import useDataTable from "../../hooks/useDataTable";
import UserTable from "../UserTable/UserTable";

export default function HookUserTable() {
  const { data, filter, handleFilterChange } = useDataTable();

  return (
    <>
      <UserTable
        data={data}
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
    </>
  );
}
