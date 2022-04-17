import "./PlayList.css";
import {useUserData} from "../../context";
import {NavMenu, VideoCard} from "../../components";

const PlayList = () => {
  const {userDataState} = useUserData();
  console.log(userDataState.playlist);
  return (
    <section className="app-ctn">
      <NavMenu />
      <div>
        <h2 className="text-center main-title">Your Playlist</h2>
        <div className="playlist-ctn">
          {userDataState.playlist.map((item) => (
            <div className="pd-bottom-lg" key={item.videos[0].id}>
              <h3 className="playlist-title pd-bottom-lg">{item.name}</h3>
              <div className="videos-ctn">
                {item.videos.map((video) => (
                  <VideoCard cardData={video} key={video.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export {PlayList};
