import "./VideoListing.css";
import {useState, useEffect} from "react";
import axios from "axios";
import {NavMenu, VideoCard, Loader} from "../../components";

const VideoListing = () => {
  const [videos, setVideos] = useState([]);
  const [categoryVideos, setCategoryVideos] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentCategory, setCurrentCategory] = useState("All");
  const videoCategory = [
    "Stock Investing",
    "Real Estate",
    "Basic Finance",
    "Self Help",
  ];

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        setVideos(response.data.videos);
        setLoader(false);
        setCategoryVideos(response.data.videos);
      } catch (err) {
        setLoader(false);
        console.error("video listing", err);
      }
    })();
  }, []);

  const handleVideoFilter = (category) => {
    setCurrentCategory(category);
    const result = videos.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
    setCategoryVideos(result);
  };

  const handleAllCategory = () => {
    setCurrentCategory("All");
    setCategoryVideos(videos);
  };

  const isChipActive = (category) => {
    return currentCategory.toLowerCase() === category.toLowerCase()
      ? "chip-active"
      : null;
  };
  return (
    <section className="app-ctn">
      <NavMenu />
      <div className="video-list-ctn">
        <div className="chips-ctn pd-sm">
          <div
            className={`chip ${isChipActive("All")}`}
            onClick={handleAllCategory}
          >
            <span>All</span>
          </div>
          {videoCategory.map((item) => (
            <div
              className={`chip ${isChipActive(item)}`}
              key={item}
              onClick={() => handleVideoFilter(item)}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
        {loader && <Loader />}
        <div className="videos-ctn pd-lg">
          {categoryVideos.map((item) => (
            <VideoCard cardData={item} key={item._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export {VideoListing};
