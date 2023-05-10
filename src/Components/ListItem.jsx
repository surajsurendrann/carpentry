import "./listItem.css";
import { FiEdit } from "react-icons/fi";

function ListItem({ name, id }) {
  return (
    <div className="listItemContainer">
      <div className="leftListItem">
        <p>{name}</p>
      </div>
      <div className="centerListItem">
        <p>{id}</p>
      </div>
      <div className="rightListItem">
        <FiEdit className="text-xl transform active:scale-75 transition-transform" />
      </div>
    </div>
  );
}

export default ListItem;
