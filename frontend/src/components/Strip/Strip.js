import { Link } from "react-router-dom";
import "../../App.css";
import "./Strip.css";

const Strip = ({ note: { title } }) => {
  // console.log(id);
  const onClickEdit = () => {
    console.log("onClickedit");
  };
  const onClickDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      console.log("onClickDelete", id);
    }
  };
  return (
    <div className="strip flex justify-sb align-ct">
      <Link
        className="notes-title"
        to={`/mynotes/${title.replaceAll(" ", "-")}`}
      >
        <h2>{title}</h2>
      </Link>
      <div>
        <Link
          className="strip-btn edit-btn blue"
          to={`/mynotes/edit/${title.replaceAll(" ", "-")}`}
        >
          Edit
        </Link>
        <button
          className="strip-btn red"
          onClick={() => onClickDelete(title.replaceAll(" ", "-"))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Strip;
