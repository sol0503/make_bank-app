const Card = ({ props }) => {
  return (
    <>
      <div className="Card">
        <div className="wrapper">
          <img src="/sinhan.png" alt="신한은행" />
          <br />
          <a href={props}>링크</a>
        </div>
      </div>
    </>
  );
};
export default Card;
