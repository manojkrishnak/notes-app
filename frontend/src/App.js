import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotesPage from "./screens/Notes/Notes";
import LandingPage from "./screens/LandingPage/LandingPage";
import EachNote from "./screens/Notes/EachNote";
import NotFound from "./components/NotFound/NotFound";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/mynotes" component={NotesPage} exact />
        <Route path="/mynotes/:note" component={EachNote} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
