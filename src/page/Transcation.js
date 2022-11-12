import Bar from "../Bar";

const Transaction = () => {
  return (
    <div className="Transaction">
      <Bar pagename={"예금계좌 거래내역 페이지"} />
      <div className="box">
        <div className="wrapper">
          <div className="info">
            <input placeholder="이름"></input>
            <select name="month">
              <option>전체</option>
              <option>한달</option>
            </select>
            <button>입력</button>
          </div>
          <br />
          <div className="content">
            <div className="block">
              <h3>계좌</h3>
            </div>
            <div className="price">
              <h3>값</h3>
            </div>
            <div className="what">
              <h3>입력/출력</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Transaction;
