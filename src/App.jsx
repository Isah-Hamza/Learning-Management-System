import { Route, Routes } from "react-router-dom";
import "./App.css";
import AccountSelection from "./pages/AccountSelection";
import Login from "./pages/Login";
import NewPassword from "./pages/NewPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyAccount from "./pages/VerifyAccount";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<AccountSelection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
      </Routes>
    </div>
  );
}

export default App;
