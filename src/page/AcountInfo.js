import Bar from "../Bar";
const AccountInfo = () => {
  return (
    <div className="AccountInfo">
      <Bar pagename={"예금계좌 정보 페이지"} />
      <div className="box">
        <div className="wrapper">
          <div className="search">
            <input placeholder="이름"></input>
            <button>입력</button>
          </div>
          <br />
          <div className="info">
            <div className="block">
              <h1>예금계좌ID</h1>
            </div>
            <div className="price">
              <h1>잔고</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountInfo;
