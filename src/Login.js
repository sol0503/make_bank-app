import { ReactComponent as ArrowIcon } from "./assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const save = () => {
    alert("로그인되었습니다!");
  };
  return (
    <div className="Login">
      <div className="bar">
        <div className="icon">
          <ArrowIcon onClick={() => navigate("/")} />
        </div>
        <h4>로그인페이지</h4>
        <div></div>
      </div>

      <div className="box">
        <div className="wrapper">
          <h1>로그인</h1>
          <h2>웹 이용을 위한 필수 로그인:)</h2>
          <div>
            <h3>ID</h3>
            <input placeholder="아이디를 입력하세요" />
          </div>
          <div>
            <h3>password</h3>
            <input placeholder="비밀번호를 입력하세요" />
          </div>
          <div className="find">
            <div>
              <a>아이디찾기</a>
            </div>
            <div>
              <a>비밀번호찾기</a>
            </div>
          </div>
          <button onClick={save}>로그인하기</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
