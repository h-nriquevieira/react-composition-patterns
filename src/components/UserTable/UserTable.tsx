import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { DataTableProps } from "../../types/DataTableProps";

export default function UserTable({ data }: DataTableProps) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Idade</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <TableRow>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.isActive ? "Ativo" : "Inativo"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
