import React, { useState } from "react";
import axios from "axios";
import Bar from "../Bar";
import Btn from "../Btn";
const AccountInfo = () => {
  const [name, setName] = useState("");
  const submit = (e) => {
    console.log(name);
    axios({
      url: "/query/accounts/" + name,
      method: "get",
      data: {
        accountId: "0000-0000",
        userId: 1,
        createDate: "2022-11-28",
        cardApply: false,
        balance: 0,
        accountType: 1,
        userName: "홍길동",
        phone: "010-0000-0000",
        email: "aaa@gmail.com",
        id: 1,
        socialNumber: null,
      },

      baseURL: "http://localhost:8080",
      //withCredentials: true,
    }).then(function (response) {
      console.log(response.data);
      console.log(response.data.JavaData[0].NICKNAME);
    });
  };
  // const testAxios = ({ username }) => {
  //   axios({
  //     url: "/query/accounts/" + username,
  //     method: "get",
  //     data: {
  //       accountId: "0000-0000",
  //       userId: 1,
  //       createDate: "2022-11-28",
  //       cardApply: false,
  //       balance: 0,
  //       accountType: 1,
  //       userName: "홍길동",
  //       phone: "010-0000-0000",
  //       email: "aaa@gmail.com",
  //       id: 1,
  //       socialNumber: null,
  //     },

  //     baseURL: "http://localhost:8080",
  //     //withCredentials: true,
  //   }).then(function (response) {
  //     console.log(response.data);
  //     console.log(response.data.JavaData[0].NICKNAME);
  //   });
  // };
  return (
    <div className="AccountInfo">
      <Bar pagename={"예금계좌 정보 페이지"} />
      <div className="main">
        <div className="wrapper">
          <div className="box1">
            <div className="search">
              <input
                placeholder="이름"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
              <button onClick={submit}>입력</button>
            </div>
            <br />
            <div className="info">
              <div className="when">
                <h3>날짜</h3>
              </div>
              <div className="block">
                <h3>예금계좌ID</h3>
              </div>
              <div className="price">
                <h3>잔고</h3>
              </div>
            </div>
          </div>
          <div className="center">
            <button>정리</button>
          </div>
          <div className="box2">
            <div className="info">
              <div className="when">
                <h3>날짜</h3>
              </div>
              <div className="block">
                <h3>예금계좌ID</h3>
              </div>
              <div className="price">
                <h3>잔고</h3>
              </div>
              <div className="trans">
                <div className="trans_btn">
                  <Btn props={"/transaction"} name={"거래내역"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountInfo;
