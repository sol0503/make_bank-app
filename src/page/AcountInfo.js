import Bar from "../Bar";
import Btn from "../Btn";
const AccountInfo = () => {
  return (
    <div className="AccountInfo">
      <Bar pagename={"예금계좌 정보 페이지"} />
      <div className="main">
        <div className="wrapper">
          <div className="box1">
            <div className="search">
              <input placeholder="이름"></input>
              <button>입력</button>
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
