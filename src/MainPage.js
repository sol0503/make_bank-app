import { useNavigate } from "react-router-dom";
import Card from "./Card";
const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="MainPage">
      <div className="bar">
        <div></div>
        <div>
          <h6>은행 웹만들기</h6>
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
      <div>
        <Card props={"https://www.shinhan.com/index.jsp"} />
      </div>
    </div>
  );
};
export default MainPage;
