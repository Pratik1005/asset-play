import "./App.css";
import {Routes, Route} from "react-router-dom";
import {VideoListing, Search, Login, SignUp, ForgotPassword} from "./pages/";

function App() {
  return (
    <div className="App light-theme">
      <Routes>
        <Route path={"/"} element={<VideoListing />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/forgotpassword"} element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
