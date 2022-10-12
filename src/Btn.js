import { useNavigate } from "react-router-dom";

const Btn = ({ props, name }) => {
  const navigate = useNavigate();
  return (
    <div className="Btn">
      <button onClick={() => navigate(props)}>{name}</button>
    </div>
  );
};
export default Btn;
