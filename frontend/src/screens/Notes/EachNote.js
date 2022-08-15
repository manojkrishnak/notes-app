import MainScreen from "../../components/MainScreen";
import "../../App.css";
import "./EachNote.css";

const EachNote = ({ category, createdAt }) => {
  console.log("each note", category, createdAt);
  const style = {
    height: "83vh",
    fontSize: "2rem",
    textAlign: "center",
    marginTop: "1rem",
  };

  return (
    <MainScreen title={"Welcome Manoj..."}>
      <div className="flex justify-sb" style={style}>
        <p className="category">{category}</p>
        <p className="date">
          <time>{createdAt}</time>
        </p>
      </div>
    </MainScreen>
  );
};

export default EachNote;
