import { CssBaseline } from "@mui/material";
import "./App.css";
import { HOCEnhancedUserTable } from "./components/HOCEnhancedUserTable/HOCEnhancedUserTable";

function App() {
  return (
    <>
      <CssBaseline />
      <HOCEnhancedUserTable />
    </>
  );
}

export default App;
