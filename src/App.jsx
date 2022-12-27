import { Route, Routes } from "react-router-dom";
import "./App.css";
import AccountSelection from "./pages/AccountSelection";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<AccountSelection />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
