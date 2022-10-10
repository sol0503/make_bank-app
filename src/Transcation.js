import Bar from "./Bar";

const Transaction = () => {
  return (
    <div className="Transaction">
      <Bar pagename={"예금계좌 거래내역 페이지"} />
      <div className="box">
        <h5>예금계좌ID</h5>
        <h5>입출금날짜</h5>
        <h5>거래번호</h5>
        <h3>예금구분</h3>
        <h3>예금내용</h3>
        <h3>거래금액</h3>
        <h3>예금잔고</h3>
      </div>
    </div>
  );
};
export default Transaction;
