import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import { useNavigate } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import Transaction from "./page/Transcation";
import AccountInfo from "./page/AcountInfo";
import CardInfo from "./page/CardInfo";
import Client from "./page/Client";
import Birth from "./page/Birth";
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
        <Route path="/Birth" element={<Birth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
