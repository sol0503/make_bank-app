const Need = () => {
  const isPossible = () => {
    alert("가능/불가능아이디입니다.");
  };
  return (
    <div>
      <div className="id">
        <h3>ID</h3>
        <input placeholder="아이디를 입력하세요" />
        <div className="possible">
          <div></div>
          <div>
            <button onClick={isPossible}>가능유무</button>
          </div>
        </div>
      </div>
      <div>
        <h3>password</h3>
        <input placeholder="비밀번호를 입력하세요" />
      </div>
      <div>
        <br />
        <h3>check!</h3>
        <input placeholder="비밀번호 다시한번 적어주세요" />
      </div>
    </div>
  );
};
export default Need;
