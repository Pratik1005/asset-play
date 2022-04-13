import "./VideoListing.css";
import {useState, useEffect} from "react";
import axios from "axios";
import {NavMenu, VideoCard} from "../../components";
import thumbnail from "../../assets/video-thumbnail.jpg";
import profile from "../../assets/profile.jpg";

const VideoListing = () => {
  const [videos, setVideos] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        console.log(response.data.videos);
        setVideos(response.data.videos);
      } catch (err) {
        console.error("video listing", err);
      }
    })();
  }, []);
  return (
    <section className="app-ctn">
      <NavMenu />
      <div className="video-list-ctn">
        <div className="chips-ctn pd-sm">
          <div className="chip  chip-active">
            <p>All</p>
          </div>
          <div className="chip">
            <p>Stock Investing</p>
          </div>
          <div className="chip">
            <p>Real Estate</p>
          </div>
          <div className="chip">
            <p>Basic Finance</p>
          </div>
          <div className="chip">
            <p>Self Help</p>
          </div>
        </div>
        <div className="videos-ctn pd-lg">
          {videos.map((item) => (
            <VideoCard cardData={item} key={item._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export {VideoListing};
