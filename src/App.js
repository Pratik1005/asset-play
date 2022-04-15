import "./App.css";
import {Routes, Route} from "react-router-dom";
import {RequiresAuth} from "./utils";
import {
  VideoListing,
  Search,
  Login,
  SignUp,
  ForgotPassword,
  PlayList,
  LikedVideos,
  History,
} from "./pages/";

function App() {
  return (
    <div className="App light-theme">
      <Routes>
        <Route path={"/"} element={<VideoListing />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/forgotpassword"} element={<ForgotPassword />} />
        <Route
          path={"/playlist"}
          element={
            <RequiresAuth>
              <PlayList />
            </RequiresAuth>
          }
        />
        <Route
          path={"/likedvideos"}
          element={
            <RequiresAuth>
              <LikedVideos />
            </RequiresAuth>
          }
        />
        <Route
          path={"/history"}
          element={
            <RequiresAuth>
              <History />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
