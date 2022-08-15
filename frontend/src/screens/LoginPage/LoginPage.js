import axios from "axios";
import { useState } from "react";
import MainScreen from "../../components/MainScreen";
import Loader from "../../components/Loader/Loader";
import ShowError from "../../components/ShowError";
import "./LoginPage.css";
import { Link, useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    console.log("from login page ", value, name);
    setError("");
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handlle-login");
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { email, password } = formValues;
      const { data: loginData } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      console.log(loginData);
      localStorage.setItem("notesUser", JSON.stringify(loginData));
      setLoading(false);
      history.push("/mynotes");
    } catch (error) {
      setLoading(false);
      setError(error.response.data);
    }
  };

  return (
    <MainScreen title={"Login"}>
      {loading && <Loader />}
      {error && <ShowError message={error.message} variant="red" />}
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type={"email"}
          id="email"
          name="email"
          placeholder="johndoe@example.com"
          onChange={onChangeHandler}
        />
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type={"password"}
          id="password"
          onChange={onChangeHandler}
          name="password"
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
      <div>
        <p>
          New user?{" "}
          <Link to={"/register"} style={{ color: "#3f6a8f", fontWeight: 600 }}>
            Register
          </Link>
        </p>
      </div>
    </MainScreen>
  );
};

export default LoginPage;
