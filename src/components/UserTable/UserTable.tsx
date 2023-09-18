import { DataTableProps } from "../../types/DataTableProps";

export default function UserTable({ data }: DataTableProps) {
  return (
    <>
      {data.map((item) => (
        <p>
          {item.name} + {item.age} + {item.isActive ? "Ativo" : "Inativo"}{" "}
        </p>
      ))}
    </>
  );
}
