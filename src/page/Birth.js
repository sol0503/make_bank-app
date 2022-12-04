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
                <div className="main">
                  <h2>{time() + "  생일에 가장 가까운 주인공은~!?"}</h2>
                  <button onClick={submit}>확인해보기!</button>
                </div>
                <div></div>
              </div>
              <div className="who">
                <div>
                  <h2>이름</h2>
                  <br />
                  <h2>{data.name}</h2>
                </div>
                <div>
                  <h2>주소</h2>
                  <br />
                  <h2>{data.address}</h2>
                </div>
                <div>
                  <h2>생일</h2>
                  <br />
                  <h2>{data.birthday}</h2>
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
