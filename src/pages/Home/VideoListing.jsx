import "./VideoListing.css";
import {useState, useEffect} from "react";
import axios from "axios";
import {NavMenu, VideoCard} from "../../components";

const VideoListing = () => {
  const [videos, setVideos] = useState([]);
  const [categoryVideos, setCategoryVideos] = useState([]);
  const [loader, setLoader] = useState(true);
  const videoCategory = [
    "Stock Investing",
    "Real Estate",
    "basic Finance",
    "Self Help",
  ];

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        setVideos(response.data.videos);
        setCategoryVideos(response.data.videos);
      } catch (err) {
        console.error("video listing", err);
      }
    })();
  }, []);

  const handleVideoFilter = (category) => {
    const result = videos.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
    setCategoryVideos(result);
  };
  return (
    <section className="app-ctn">
      <NavMenu />
      <div className="video-list-ctn">
        <div className="chips-ctn pd-sm">
          <div className="chip  chip-active">
            <span onClick={() => setCategoryVideos(videos)}>All</span>
          </div>
          {videoCategory.map((item) => (
            <div className="chip" key={item}>
              <span onClick={() => handleVideoFilter(item)}>{item}</span>
            </div>
          ))}
          {/* <div className="chip">
            <span onClick={() => handleVideoFilter("Stock Investing")}>
              Stock Investing
            </span>
          </div>
          <div className="chip">
            <span onClick={() => handleVideoFilter("Real Estate")}>
              Real Estate
            </span>
          </div>
          <div className="chip">
            <span onClick={() => handleVideoFilter("Basic Finance")}>
              Basic Finance
            </span>
          </div>
          <div className="chip">
            <span onClick={() => handleVideoFilter("Self help")}>
              Self Help
            </span>
          </div> */}
        </div>
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
