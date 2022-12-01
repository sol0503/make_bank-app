import React, { useState } from "react";
import axios from "axios";
import Bar from "../Bar";

const CardInfo = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  // const [card, setCard] = useState(null); //신용카드
  // const [account, setAccount] = useState(null); //연결계좌
  // const [amountUsed, setAmountUsed] = useState(null); //사용금액
  // const [limit, setLimited] = useState(null); //사용한도
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
      url: "/query/users/" + userId + "/cards",

      method: "get",
    }).then(function (response) {
      setData2(response.data);
    });
    console.log("/query/users/" + userId + "/cards");
    console.log(data2);
  };
  return (
    <div className="CardInfo">
      <Bar pagename={"카드정보 페이지"} />
      <div className="box">
        <div className="wrapper">
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
          <div className="who">
            <h2>이름</h2>
            <ul>
              {data.map((value) => (
                <li key={value.id}>
                  <button value={value.id} data-id={value.id} onClick={onClick}>
                    {value.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="main">
            <div className="block">
              <h3>신용카드</h3>
              <ul>
                {data2.map((value) => (
                  <li key={value.id}>{value.cardType}</li>
                ))}
              </ul>
            </div>
            <div className="price">
              <h3>연결계좌</h3>
              <ul>
                {data2.map((value) => (
                  <li key={value.id}>{value.account}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>사용금액</h3>
              <ul>
                {data2.map((value) => (
                  <li key={value.id}>{value.payAmount}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>사용한도</h3>
              <ul>
                {data2.map((value) => (
                  <li key={value.id}>{value.payLimit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardInfo;
