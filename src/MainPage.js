import { useNavigate } from "react-router-dom";
import Card from "./Card";
const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="MainPage">
      <div className="bar">
        <div></div>
        <div>
          <h2>은행 웹만들기</h2>
        </div>
        <div className="Span">
          <span
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인 |
          </span>
          <span onClick={() => navigate("/register")}> 회원가입</span>
        </div>
      </div>
      <div className="cards">
        <Card
          props={"https://www.shinhan.com/index.jsp"}
          name={"신한은행"}
          img={"/sinhan.png"}
        />
        <Card
          props={"https://www.kbstar.com/"}
          name={"국민은행"}
          img={"/kokmin.png"}
        />
        <Card
          props={"https://www.kebhana.com/"}
          name={"하나은행"}
          img={"/hana.png"}
        />
        <Card
          props={"https://www.tossbank.com/"}
          name={"토스뱅크"}
          img={"/toss.png"}
        />
      </div>
    </div>
  );
};
export default MainPage;
