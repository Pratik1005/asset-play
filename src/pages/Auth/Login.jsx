import "./Auth.css";
import {useState} from "react";
import {useNavigate, Link, useLocation} from "react-router-dom";
import {toast} from "react-toastify";
import {NavMenu, MobileHeader} from "../../components";
import {useAuth} from "../../context";
import axios from "axios";

const Login = () => {
  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleEmail = (e) => {
    setLoginData((prev) => ({...prev, email: e.target.value}));
  };

  const handlePassword = (e) => {
    setLoginData((prev) => ({...prev, password: e.target.value}));
  };

  const handleLogin = async (e, email, password) => {
    e.preventDefault();
    setLoginData({email: email, password: password});
    try {
      const response = await axios.post("/api/auth/login", {email, password});
      localStorage.setItem("userData", JSON.stringify(response.data.foundUser));
      localStorage.setItem("token", response.data.encodedToken);
      setAuth({token: response.data.encodedToken, isLoggedIn: true});
      toast.success("You have logged in");
      navigate(from, {replace: true});
    } catch (err) {
      toast.error("Login failed");
      console.error("login", err);
    }
  };

  return (
    <section className="app-ctn">
      <MobileHeader />
      <NavMenu />
      <div>
        <form
          className="br-md auth-form"
          onSubmit={(e) => handleLogin(e, loginData.email, loginData.password)}
        >
          <h2 className="text-center mg-bottom-md">Login</h2>
          <div className="form-control">
            <label htmlFor="email" className="fw-bold">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@gmail.com"
              autoComplete="off"
              required
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
              required
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
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="form-control">
            <button
              className="btn btn-primary-outline"
              onClick={(e) =>
                handleLogin(e, "adarshbalika@gmail.com", "adarshBalika123")
              }
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
