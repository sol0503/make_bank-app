import { useNavigate } from "react-router-dom";
import Btn from "./Btn";
import Card from "./Card";
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
/>;
const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="MainPage">
      <div className="bar">
        <div></div>
        <div className="mid">
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
        <div></div>
      </div>

      <div className="main">
        <div className="box">
          <div></div>
          <div className="main_mid">
            <div>
              <Btn props={"/transaction"} name={"거래내역"} />
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
              <Card
                props={"https://www.kakaobank.com/"}
                name={"카카오뱅크"}
                img={"/kakao.png"}
              />
              {/* <Card
          props={"https://www.wooribank.com/"}
          name={"우리은행"}
          img={"/woori.png"}
        /> */}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
