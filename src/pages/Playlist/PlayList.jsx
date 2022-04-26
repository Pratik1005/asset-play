import "./PlayList.css";
import {useUserData, useAuth} from "../../context";
import {NavMenu, VideoCard, Loader} from "../../components";
import {deletePlaylist} from "../../utils";

const PlayList = () => {
  const {userDataState, userDataDispatch} = useUserData();
  const {auth} = useAuth();
  const {playlist} = userDataState;

  return (
    <section className="app-ctn">
      <NavMenu />
      <div>
        <h2 className="text-center main-title">Your Playlist</h2>
        <div className="section-ctn">
          {playlist.length === 0 && (
            <h3 className="text-center">You have no playlist</h3>
          )}
          {playlist.map((item) => (
            <div className="pd-bottom-lg" key={item._id}>
              <div className="playlist-title-ctn pd-bottom-lg">
                <h3 className="playlist-title">{item.title}</h3>
                <span
                  className="material-icons cursor-pointer"
                  onClick={() =>
                    deletePlaylist(item._id, userDataDispatch, auth.token)
                  }
                >
                  delete
                </span>
              </div>
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
