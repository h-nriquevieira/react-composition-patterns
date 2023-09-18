import { CssBaseline } from "@mui/material";
import "./App.css";
import DataTableRenderer from "./components/DataTableRenderer/DataTableRenderer";
import UserTable from "./components/UserTable/UserTable";

function App() {
  return (
    <>
      <CssBaseline />
      React composition patterns
      <DataTableRenderer render={UserTable} />
    </>
  );
}

export default App;
