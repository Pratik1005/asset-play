import "./PlayList.css";
import {NavMenu, VideoCard} from "../../components";
import thumbnail from "../../assets/video-thumbnail.jpg";
import profile from "../../assets/profile.jpg";
const PlayList = () => {
  return (
    <section className="app-ctn">
      <NavMenu />
      <div>
        <h2 className="text-center main-title">Your Playlist</h2>
        <div className="playlist-ctn">
          <div className="playlist">
            <h3 className="playlist-title pd-bottom-lg">Playlist 1</h3>
            <div className="videos-ctn">
              <VideoCard
                cardData={{
                  thumbnail,
                  profile,
                  title: "Dummy title",
                  creator: "warikoo",
                  views: "10000",
                  date: "May 10, 2022",
                  length: "20:22",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export {PlayList};
