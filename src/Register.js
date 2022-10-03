import { ReactComponent as ArrowIcon } from "./assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const isPossible = () => {
    alert("가능/불가능아이디입니다.");
  };
  const isFinish = () => {
    alert("회원가입이 완료되었습니다.");
  };
  return (
    <div className="Register">
      <div className="bar">
        <div className="icon">
          <ArrowIcon onClick={() => navigate("/")} />
        </div>
        <h4>회원가입페이지</h4>
        <div></div>
      </div>
      <div className="box">
        <div className="wrapper">
          <h1>회원가입</h1>
          <h2>회원가입을 부탁드립니다:)</h2>
          <div className="id">
            <h3>ID</h3>
            <input placeholder="아이디를 입력하세요" />
            <div className="possible">
              <div></div>
              <div>
                <button onClick={isPossible}>가능유무</button>
              </div>
            </div>
          </div>
          <div>
            <h3>password</h3>
            <input placeholder="비밀번호를 입력하세요" />
          </div>
          <div className="finish">
            <button onClick={isFinish}>회원가입하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
