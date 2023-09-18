import { User } from "./User";

export type DataTableProps = {
  data: User[];
  setFilter: (filter: string) => void;
};
