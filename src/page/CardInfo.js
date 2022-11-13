import Bar from "../Bar";

const CardInfo = () => {
  return (
    <div className="CardInfo">
      <Bar pagename={"카드정보 페이지"} />
      <div className="box">
        <div className="wrapper">
          <div className="search">
            <input placeholder="이름"></input>
            <button>입력</button>
          </div>
          <div className="main">
            <div className="block">
              <h3>신용카드</h3>
            </div>
            <div className="price">
              <h3>연결계좌</h3>
            </div>
            <div className="">
              <h3>사용금액</h3>
            </div>
            <div>
              <h3>사용한도</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardInfo;
