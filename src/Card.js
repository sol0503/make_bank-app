const Card = ({ props, name, img }) => {
  return (
    <>
      <div className="Card">
        <div className="wrapper">
          <img src={img} alt={name} />
          <br />
          <a href={props} target="_blank">
            {name}
          </a>
        </div>
      </div>
    </>
  );
};
export default Card;
