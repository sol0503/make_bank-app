import React, { useState } from "react";
import axios from "axios";
import Bar from "../Bar";
import Btn from "../Btn";
const AccountInfo = () => {
  const [selectedUserId, setSelectedUserId] = useState(-1);

  const [name, setName] = useState("");
  // const [show, setShow] = useState(false);
  const [data2, setData2] = useState([]);
  const [data, setData] = useState([]);
  const submit = (e) => {
    console.log(name);
    axios({
      // url: "/query/accounts/" + name,
      url: "/query/users/" + name,
      method: "get",
    }).then(function (response) {
      setData(response.data);
    });
    // setShow(!show);
  };

  const onClick = (e) => {
    e.preventDefault();
    const userId = e.currentTarget.dataset.id;
    console.log(e.currentTarget.dataset);
    console.log(e.currentTarget.dataset.id);
    // axios넣기;
    axios({
      url: "/query/users/" + userId + "/accounts",

      method: "get",
    }).then(function (response) {
      setData2(response.data);
    });
    console.log("/query/users/" + userId + "/accounts");
    console.log(data2);
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
                {data.map((value) => (
                  <li key={value.id}>
                    <button
                      value={value.id}
                      data-id={value.id}
                      onClick={onClick}
                    >
                      {value.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="info">
              <div className="when">
                <h3>날짜</h3>
                <ul>
                  {data2.map((value) => (
                    <li key={value.id}>{value.createDate}</li>
                  ))}
                </ul>
              </div>
              <div className="block">
                <h3>예금계좌</h3>
                <ul>
                  {data2.map((value) => (
                    <li key={value.id}>{value.accountId}</li>
                  ))}
                </ul>
              </div>
              <div className="price">
                <h3>잔고</h3>
                <ul>
                  {data2.map((value) => (
                    <li key={value.id}>{value.balance}</li>
                  ))}
                </ul>
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
