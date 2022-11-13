import Bar from "../Bar";
const Birth = () => {
  const time = () => {
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    let dayOfWeek = week[now.getDay()];
    return (
      todayYear +
      "년" +
      todayMonth +
      "월" +
      todayDate +
      "일" +
      dayOfWeek +
      "요일"
    );
  };
  return (
    <>
      <div className="Birth">
        <Bar pagename={"생일 고객 페이지"} />
        <div className="box">
          <div className="wrapper">
            <div className="block">
              <div className="title">
                <div></div>
                <div>
                  <h2>{time() + "  생일의 주인공은~!?"}</h2>
                </div>
                <div></div>
              </div>
              <div className="who">
                <div>
                  <h3>이름</h3>
                </div>
                <div>
                  <h3>주소</h3>
                </div>
                <div>
                  <h3>생일</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Birth;
