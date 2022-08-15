import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  // const history = useHistory();
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("notesUser");
  //   if (userInfo) {
  //     history.push("/mynotes");
  //   }
  // }, [history]);
  return (
    <div className="landing-page flex justify-ct align-ct flex-col">
      <h1 className="banner-title">Welcome to NoteMakerr</h1>
      <h3 className="caption">One place for all your notes</h3>
      <div className="btns">
        <Link to="/login" className="signin-btn">
          Login
        </Link>
        <Link to="/register" className="signup-btn">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
