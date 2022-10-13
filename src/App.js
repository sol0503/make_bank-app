import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Transaction from "./Transcation";
import AccountInfo from "./AcountInfo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/AccountInfo" element={<AccountInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
