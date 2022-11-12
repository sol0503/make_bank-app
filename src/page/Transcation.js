import Bar from "../Bar";

const Transaction = () => {
  return (
    <div className="Transaction">
      <Bar pagename={"예금계좌 거래내역 페이지"} />
      <div className="box">
        <div className="wrapper">
          <div className="info">
            <div>
              <input placeholder="이름"></input>
            </div>
            <div>
              <select name="month">
                <option>전체</option>
                <option>한달</option>
              </select>
            </div>
            <div>
              <button>입력</button>
            </div>
          </div>
          <br />
          <div className="content">
            <div className="block">계좌</div>
            <div className="price">값</div>
            <div className="what">입력/출력</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Transaction;
