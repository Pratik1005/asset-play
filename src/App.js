import "./App.css";
import {Routes, Route} from "react-router-dom";
import {VideoListing} from "./pages/";

function App() {
  return (
    <div className="App light-theme">
      <Routes>
        <Route path={"/"} element={<VideoListing />} />
      </Routes>
    </div>
  );
}

export default App;
