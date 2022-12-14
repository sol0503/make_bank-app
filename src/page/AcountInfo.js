import React, { useState, useEffect } from "react";
import axios from "axios";
import Bar from "../Bar";
const AccountInfo = () => {
  const [selectedUserId, setSelectedUserId] = useState(-1);

  const [name, setName] = useState("");
  const [data2, setData2] = useState([]);
  const [data, setData] = useState([]);
  const [data3, setData3] = useState([]);
  const [showData, setShowData] = useState([]);
  const [selected, setSelected] = useState("all");

  const submit = (e) => {
    console.log(name);
    axios({
      // url: "/query/accounts/" + name,
      url: "/query/users/" + name,
      method: "get",
    }).then(function (response) {
      setData(response.data);
    });
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

  useEffect(() => {
    setShowData(data3);
    setSelected("all");
  }, [data3]);

  const handleDate = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    if (selected === "all") {
      setShowData(data3);
      return;
    }

    console.log(selected);
    console.log(data3);
    let date = new Date();
    let currMonth = date.getMonth() + 1;
    let arr = [];

    for (let i = 0; i < data3.length; i++) {
      let month = data3[i]["transferDate"].split("-")[1];
      if (currMonth - parseInt(month) <= 1) {
        arr.push(data3[i]);
      }
    }

    console.log("arr", arr);
    setShowData(arr);
  }, [selected]);

  const onHistory = (e) => {
    e.preventDefault();
    const userId = e.currentTarget.dataset.id;
    console.log(e.currentTarget.dataset);
    console.log(e.currentTarget.dataset.id);
    // axios넣기;
    axios({
      url: "/query/accountInfo/" + userId,
      method: "get",
    }).then(function (response) {
      console.log(response.data);
      setData3(response.data.accountRecords);
    });
    console.log("/query/accountInfo/" + userId);
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
                      {value.name}({value.socialNumber})
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
              <div className="trans">
                <h3>거래내역</h3>
                <ul>
                  {data2.map((value) => (
                    <li key={value.id}>
                      <button
                        value={value.id}
                        data-id={value.id}
                        onClick={onHistory}
                      >
                        거래내역
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="center">
            <button>=></button>
          </div> */}
          <div className="box2">
            <div className="transaction">
              <h1>예금계좌 거래내역</h1>
              <div className="wrapper">
                <div className="info">
                  <div className="name">
                    <div></div>
                    {/* <h3>{data2.accountId}계좌</h3> */}
                    <div></div>
                  </div>
                  <select onChange={handleDate} name="month" value={selected}>
                    <option value="all">전체</option>
                    <option value="aMonth">한달</option>
                  </select>
                  {/* <button>입력</button> */}
                </div>
                <br />
                <div className="content">
                  <div className="block">
                    <h3>날짜</h3>
                    <ul>
                      {showData.map((value) => (
                        <li key={value.id}>{value.transferDate}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="price">
                    <h3>값</h3>
                    <ul>
                      {showData.map((value) => (
                        <li key={value.id}>{value.amount}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="what">
                    <h3>입금/출금--설명</h3>

                    <ul>
                      {showData.map((value) => (
                        <li key={value.id}>
                          {value.state}--
                          {value.description}
                        </li>
                      ))}
                    </ul>
                  </div>
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
