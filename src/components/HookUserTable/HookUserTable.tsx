import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import useDataTable from "../../hooks/useDataTable";

export default function HookUserTable() {
  const { data, filter, handleFilterChange } = useDataTable();

  return (
    <>
      <TextField
        label="Filtrar pelo nome"
        value={filter}
        onChange={handleFilterChange}
      />
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
    </>
  );
}
