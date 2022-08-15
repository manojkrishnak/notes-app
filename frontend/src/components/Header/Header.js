import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <>
      <header className="header">
        <div className="container flex justify-sb align-ct">
          <Link className="logo flex-30" to="/">
            Notes Makerr
          </Link>
          <div className="search-container flex-40">
            <form>
              <input type="text" className="search" placeholder="Search" />
            </form>
          </div>
          <nav className="navbar flex-20">
            <ul className="flex justify-sb">
              <li>
                <Link to="/mynotes">My Notes</Link>
              </li>
              <li className="profile-name">
                <a href="#">
                  Manoj Krishna <i className="fas fa-caret-down"></i>
                </a>
                <ul className="dd">
                  <li
                    onClick={() => {
                      localStorage.removeItem("notesUser");
                      history.push("/");
                    }}
                  >
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
