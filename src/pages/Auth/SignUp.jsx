import "./Auth.css";
import {Link} from "react-router-dom";
import {NavMenu} from "../../components";

const SignUp = () => {
  return (
    <section className="app-ctn">
      <NavMenu />
      <div>
        <form className="br-md">
          <h2 className="text-center mg-bottom-md">Signup</h2>
          <div className="form-control">
            <label htmlFor="first-name" className="fw-bold">
              First name
            </label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="first name"
              autocomplete="off"
            />
          </div>
          <div className="form-control">
            <label htmlFor="last-name" className="fw-bold">
              Last name
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="last name"
              autocomplete="off"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="fw-bold">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@gmail.com"
              autocomplete="off"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="fw-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
            />
          </div>
          <div className="form-control">
            <label htmlFor="confirm-password" className="fw-bold">
              Confirm password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
            />
          </div>
          <div className="form-control">
            <input type="checkbox" id="terms-condition" name="checkbox" />
            <label htmlFor="terms-condition" className="fw-bold">
              I accept all Terms & Conditions
            </label>
          </div>
          <div className="form-control">
            <button className="btn btn-primary">Create New Account</button>
          </div>
          <div className="account-toggle fw-bold">
            <Link to="/login">
              Already have an account{" "}
              <span className="material-icons fw-bold">chevron_right</span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export {SignUp};
