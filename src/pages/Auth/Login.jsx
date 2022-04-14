import "./Auth.css";
import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {NavMenu} from "../../components";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    error: false,
  });

  const handleEmail = (e) => {
    setLoginData((prev) => ({...prev, email: e.target.value, error: false}));
  };

  const handlePassword = (e) => {
    setLoginData((prev) => ({...prev, password: e.target.value, error: false}));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      loginData.email === "test@gmail.com" &&
      loginData.password === "test@123"
    ) {
      navigate("/user");
    } else {
      setLoginData({email: "", password: "", error: true});
    }
  };

  const handleTestLogin = (e) => {
    e.preventDefault();
    setLoginData({email: "test@gmail.com", password: "test@123", error: false});
  };
  return (
    <section className="app-ctn">
      <NavMenu />
      <div>
        <form className="br-md">
          <h2 className="text-center mg-bottom-md">Login</h2>
          {loginData.error && (
            <p className="error-msg form-control">Invalid credentials</p>
          )}
          <div className="form-control">
            <label htmlFor="email" className="fw-bold">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@gmail.com"
              autocomplete="off"
              value={loginData.email}
              onChange={(e) => handleEmail(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="fw-bold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={loginData.password}
              placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
              onChange={(e) => handlePassword(e)}
            />
          </div>
          <div className="form-control">
            <input type="checkbox" id="remember-me" name="checkbox" />
            <label htmlFor="remember-me" className="fw-bold">
              Remember me{" "}
            </label>
            <Link to="/forgotpassword" className="forgot-pw fw-bold">
              Forgot your Password?
            </Link>
          </div>
          <div className="form-control">
            <button className="btn btn-primary" onClick={(e) => handleLogin(e)}>
              Login
            </button>
          </div>
          <div className="form-control">
            <button
              className="btn btn-primary-outline"
              onClick={(e) => handleTestLogin(e)}
            >
              Login with test credentials
            </button>
          </div>
          <div className="account-toggle fw-bold">
            <Link to="/signup">
              Create New Account{" "}
              <span className="material-icons fw-bold">chevron_right</span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export {Login};
