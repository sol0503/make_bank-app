import Bar from "./Bar";

const Transaction = () => {
  return (
    <div className="Transaction">
      <Bar pagename={"예금계좌 거래내역 페이지"} />
      <div className="box">
        <div className="wrapper">
          <div className="block">
            <h2>예금계좌ID</h2>
            <h2>입출금날짜</h2>
            <h2>거래번호</h2>
            <h2>예금구분</h2>
            <h2>예금내용</h2>
            <h2>거래금액</h2>
            <h2>예금잔고</h2>
          </div>
          <div className="price">
            <h2>ID</h2>
            <h2>날짜</h2>
            <h2>거래번호</h2>
            <h2>예금구분</h2>
            <h2>예금내용</h2>
            <h2>거래금액</h2>
            <h2>예금잔고</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Transaction;
