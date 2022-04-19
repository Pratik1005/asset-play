import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
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
  WatchLater,
  Profile,
} from "./pages/";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App light-theme">
      <ToastContainer autoClose={1000} />
      <Routes>
        <Route path={"/mockman"} element={<Mockman />} />
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
        <Route
          path={"/watchlater"}
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />
        <Route
          path={"/profile"}
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
