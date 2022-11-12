import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import { useNavigate } from "react-router-dom";
import Login from "./page/Login";
import Register from "./page/Register";
import Transaction from "./page/Transcation";
import AccountInfo from "./AcountInfo";
import CardInfo from "./page/CardInfo";
import Client from "./page/Client";
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
