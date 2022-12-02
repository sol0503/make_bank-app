import React, { useState } from "react";
import axios from "axios";
import Bar from "../Bar";
const Birth = () => {
  const [data, setData] = useState({});

  let now = new Date();
  const time = () => {
    // let now = new Date();
    let todayYear = now.getFullYear();

    let todayMonth = now.getMonth() + 1;

    let todayDate = now.getDate();

    const week = ["일", "월", "화", "수", "목", "금", "토"];
    let dayOfWeek = week[now.getDay()];
    return (
      todayYear +
      "년" +
      todayMonth +
      "월" +
      todayDate +
      "일" +
      dayOfWeek +
      "요일"
    );
  };
  const submit = (e) => {
    const month = now.getMonth() + 1;
    axios({
      url:
        "/query/users/closest-birthday/" +
        now.getFullYear() +
        "-" +
        month +
        "-" +
        now.getDate(),
      // url: "/query/users/closest-birthday/" + 1995 + "-" + 10 + "-" + 10,

      method: "get",
    }).then(function (response) {
      setData(response.data);
      console.log(response.data);
    });
  };
  return (
    <>
      <div className="Birth">
        <Bar pagename={"생일 고객 페이지"} />
        <div className="box">
          <div className="wrapper">
            <div className="block">
              <div className="title">
                <div></div>
                <div>
                  <h2>{time() + "  생일의 주인공은~!?"}</h2>
                  <button onClick={submit}>입력</button>
                </div>
                <div></div>
              </div>
              <div className="who">
                <div>
                  <h3>이름</h3>
                  {data.name}
                </div>
                <div>
                  <h3>주소</h3>
                  {data.address}
                </div>
                <div>
                  <h3>생일</h3>
                  {data.birthday}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Birth;
