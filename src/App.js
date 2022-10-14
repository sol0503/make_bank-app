import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Transaction from "./Transcation";
import AccountInfo from "./AcountInfo";
import CardInfo from "./CardInfo";
import Client from "./Client";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/AccountInfo" element={<AccountInfo />} />
        <Route path="/CardInfo" element={<CardInfo />} />
        <Route path="/Client" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
