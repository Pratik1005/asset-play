import "./Search.css";
import {useState, useEffect} from "react";
import {NavMenu, VideoCard, MobileHeader} from "../../components";
import axios from "axios";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allVideos, setAllVideos] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        setAllVideos(response.data.videos);
      } catch (err) {
        console.error("search videos", err);
      }
    })();
  }, []);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    setSearchResult(
      allVideos.filter((video) =>
        video.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  return (
    <section className="app-ctn">
      <MobileHeader />
      <NavMenu />
      <div>
        <div className="search-bar br-sm">
          <span className="material-icons search-icon">search</span>
          <input
            type="text"
            placeholder="Search videos..."
            className="search-input"
            value={searchInput}
            onChange={(e) => handleSearch(e)}
          />
        </div>
        {searchInput.length > 0 && searchResult.length === 0 && (
          <h3 className="text-center result-text">No videos found!</h3>
        )}
        <div className="videos-ctn section-ctn">
          {searchInput.length > 0 &&
            searchResult.map((video) => (
              <VideoCard cardData={video} key={video._id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export {Search};
