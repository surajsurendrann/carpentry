import { FiEdit } from "react-icons/fi";
import ListItem from "./ListItem";
import "./list.css";

function List() {
  return (
    <>
      <div className="container">
        <div className="heading">
          <div className="left">Project</div>
          <div className="center">Project ID</div>
          <div className="right">
            <button>+ New Project</button>
          </div>
        </div>
        <ListItem name="Project 1" id="AB1354" />
        <ListItem name="Project 2" id="CD2468" />
        <ListItem name="Project 3" id="EF3691" />
        <ListItem name="Project 3" id="EF3691" />
        <ListItem name="Project 3" id="EF3691" />
      </div>
    </>
  );
}

export default List;
