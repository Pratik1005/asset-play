import "./App.css";
import {Routes, Route} from "react-router-dom";
import {VideoListing, Search, Login} from "./pages/";

function App() {
  return (
    <div className="App light-theme">
      <Routes>
        <Route path={"/"} element={<VideoListing />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
