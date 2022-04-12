import "./VideoListing.css";
import {NavMenu, VideoCard} from "../../components";
import thumbnail from "../../assets/video-thumbnail.jpg";
import profile from "../../assets/profile.jpg";

const VideoListing = () => {
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <VideoCard cardData={{thumbnail, profile}} key={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export {VideoListing};
