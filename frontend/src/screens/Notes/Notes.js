import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Strip from "../../components/Strip/Strip";
import MainScreen from "../../components/MainScreen";

const Notes = () => {
  const [allNotes, setAllNotes] = useState([]);

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/mynotes/");
    console.log(data);
    setAllNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title={"Welcome Manoj...."}>
      <div className="notes-page">
        <Link to="/createnotes">
          <button className="create-notes-btn">Create Notes</button>
        </Link>
        {allNotes.map((note) => (
          <Strip key={note.id} note={note} />
        ))}
      </div>
    </MainScreen>
  );
};

export default Notes;
