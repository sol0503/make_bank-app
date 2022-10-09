import { ReactComponent as ArrowIcon } from "./assets/backArrow.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  axios
    .post("https://databasedesign.herokuapp.com/api/sign-up", {
      username: "",
      paasword: "",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

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
          <div>
            <h3>이름</h3>
            <input placeholder="이름을 입력하세요" />
          </div>
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
            <div>
              <h3>password</h3>
              <input placeholder="비밀번호를 입력하세요" />
            </div>
            <div>
              <br />
              <h3>check!</h3>
              <input placeholder="비밀번호 다시한번 적어주세요" />
            </div>
          </div>
          {/* 고객명,고객주소,고객생년월일,고객이메일,고객전화번호,고객직업 */}
          <div>
            <h3>주소</h3>
            <input placeholder="주소를 입력하세요" />
          </div>
          <div>
            <h3>생년월일</h3>
            <input placeholder="xxxx.xx.xx" />
          </div>
          <div>
            <h3>이메일</h3>
            <input placeholder="xxxx@xxx.com" />
          </div>
          <div>
            <h3>전화번호</h3>
            <input placeholder="-없이 입력하세요" />
          </div>
          <div>
            <h3>직업</h3>
            <input placeholder="직업을 입력하세요" />
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
