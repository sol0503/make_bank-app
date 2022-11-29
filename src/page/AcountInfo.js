import React, { useState } from "react";
import axios from "axios";
import Bar from "../Bar";
import Btn from "../Btn";
const AccountInfo = () => {
  const [name, setName] = useState("");
  // const [show, setShow] = useState(false);
  const [address, setAddress] = useState(null);
  const [job, setJob] = useState(null);
  const submit = (e) => {
    console.log(name);
    axios({
      // url: "/query/accounts/" + name,
      url: "/query/users/" + name,
      method: "get",
    }).then(function (response) {
      response.data.map((value) => {
        setAddress(value.address);
        setJob(value.job);
        console.log(value.id);
        console.log(value.address);
        console.log(value.job);
      });
    });

    // setShow(!show);
  };
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
            <div className="who">
              <h2>이름</h2>
              <ul>
                <li>{name}</li>
                <li></li>
              </ul>
            </div>
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
