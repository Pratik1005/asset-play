import "./Auth.css";
import {Link} from "react-router-dom";
import {NavMenu} from "../../components";

const ForgotPassword = () => {
  return (
    <section className="app-ctn">
      <NavMenu />
      <div>
        <form className="br-md">
          <h2 className="text-center mg-bottom-md">Forgot Password</h2>
          <div className="form-control">
            <label htmlFor="email" className="fw-bold">
              Email address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="name@gmail.com"
              autocomplete="off"
            />
          </div>
          <div className="form-control">
            <button className="btn btn-primary">Reset Password</button>
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

export {ForgotPassword};
