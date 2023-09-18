import React from "react";
import { User } from "./User";

export type DataTableProps = {
  data: User[];
  filter: string;
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
