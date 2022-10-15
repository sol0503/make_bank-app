import { ReactComponent as ArrowIcon } from "./assets/backArrow.svg";
import { useNavigate } from "react-router-dom";

const Bar = ({ pagename }) => {
  const navigate = useNavigate();
  return (
    <div className="Bar">
      <div className="icon">
        <ArrowIcon onClick={() => navigate("/")} />
      </div>
      <h3>{pagename}</h3>
      <div></div>
    </div>
  );
};
export default Bar;
