import { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import MainScreen from "../../components/MainScreen";
import ShowError from "../../components/ShowError";
import "./RegisterPage.css";

const RegisterPage = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    cnfPassword: "",
    profilePic: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [redirection, setRedirection] = useState(false);
  const onChangeHandler = (e) => {
    console.log("value");
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const uploadImage = (pic) => {
    setError(null);
    console.log(pic);
    if (pic) {
      if (pic.type === "image/jpeg" || pic.type === "image/png") {
        const data = new FormData();
        data.append("file", pic);
        data.append("upload_preset", "notesMakerr");
        data.append("cloud_name", "manojkrishnak");
        fetch("https://api.cloudinary.com/v1_1/manojkrishnak/image/upload", {
          method: "post",
          body: data,
        })
          .then((d) => d.json())
          .then((d) => {
            console.log("pic img", d);
            setFormValues({ ...formValues, profilePic: d.url.toString() });
          })
          .catch((err) => setError(err));
      } else {
        setError("Images of type jpeg and png are ONLY accepted");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, cnfPassword, name, email, profilePic } = formValues;

    if (password !== cnfPassword) {
      setError("Passwords don't match");
      return;
    }

    if (!name || !email || !password || !cnfPassword || !profilePic) {
      setError("All fields are mandatory");
      return;
    }

    if (!profilePic) {
      setError("Please upload an image");
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "/api/user/register",
        {
          name,
          email,
          password,
          profilePic,
        },
        config
      );
      setLoading(false);
      console.log("register ", data);
      localStorage.setItem("notesUser", JSON.stringify(data));
      setRedirection(true);
      setTimeout(() => history.push("/login"), 5000);
    } catch (error) {
      setLoading(false);
      setError(error.response.data);
    }
  };

  return (
    <MainScreen title={"Register"}>
      {error && <ShowError message={error} variant="red" />}
      {loading && <Loader />}
      {redirection && <p>Redirecting to Login page....</p>}
      <form className="register-form" onSubmit={handleSubmit}>
        <p></p>
        <label htmlFor="name" className="label">
          Name<span className="required">*</span>
        </label>
        <input
          type={"text"}
          id="name"
          name="name"
          onChange={onChangeHandler}
          placeholder="John Doe"
        />

        <label htmlFor="email" className="label">
          Email<span className="required">*</span>
        </label>
        <input
          type={"email"}
          id="email"
          onChange={onChangeHandler}
          name="email"
          placeholder="johndoe@example.com"
        />

        <label htmlFor="password" className="label">
          Password<span className="required">*</span>
        </label>
        <input
          type={"password"}
          id="password"
          onChange={onChangeHandler}
          name="password"
        />

        <label htmlFor="confirm-password" className="label">
          Confirm Password<span className="required">*</span>
        </label>
        <input
          type={"text"}
          id="confirm-password"
          onChange={onChangeHandler}
          name="cnfPassword"
        />

        <label htmlFor="profile-pic" className="label">
          Profile pic<span className="required">*</span>
        </label>
        <input
          type="file"
          id="profile-pic"
          name="profile-pic"
          onChange={(e) => uploadImage(e.target.files[0])}
        />

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
      <div>
        <p>
          Existing user?{" "}
          <Link to={"/login"} style={{ color: "#3f6a8f", fontWeight: 600 }}>
            Login
          </Link>
        </p>
      </div>
    </MainScreen>
  );
};

export default RegisterPage;
