import axios from "axios";
import { useState } from "react";
import Bar from "./Bar";
import Name from "./RegisterSrc/Name";
import Need from "./RegisterSrc/Need";
import Extra from "./RegisterSrc/Extra";

const Register = () => {
  const [count, setCount] = useState(0);
  const regist = async (username, password) => {
    const res = await axios
      .post("https://databasedesign.herokuapp.com/api/sign-up", {
        username: username,
        paasword: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onAdd = () => {
    setCount((i) => i + 1);
  };
  const onMinus = () => {
    setCount((i) => i - 1);
  };
  return (
    <div className="Register">
      <Bar pagename={"회원가입페이지"} />
      <div className="box">
        <div className="wrapper">
          <h1>회원가입</h1>
          <h2>회원가입에 필요한 정보를 입력해주세요:)</h2>
          {count === 0 && <Name />}
          {count === 1 && <Need />}
          {count === 2 && <Extra />}

          <div className="Btn">
            <button onClick={onMinus}>이전페이지</button>
            <div></div>
            <button onClick={onAdd}>다음페이지</button>
          </div>

          <div className="finish">
            <button onClick={() => regist("hongill4567", "hong12345")}>
              회원가입하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
