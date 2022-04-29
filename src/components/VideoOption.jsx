import {useNavigate} from "react-router-dom";
import {useAuth, useUserData} from "../context";
import {likeService, watchLaterService} from "../services";

const VideoOption = ({setIsOptionActive, setIsSaveToPlaylistActive, video}) => {
  const {userDataState, userDataDispatch} = useUserData();
  const {auth} = useAuth();
  const navigate = useNavigate();

  const handleSavePlaylist = () => {
    if (auth.isLoggedIn) {
      setIsOptionActive((prev) => !prev);
      setIsSaveToPlaylistActive((prev) => !prev);
    } else {
      navigate("/login");
    }
  };

  const handleLikeVideo = () => {
    likeService(
      auth,
      userDataState.likedVideos,
      video,
      userDataDispatch,
      navigate
    );
    setIsOptionActive((prev) => !prev);
  };

  const handleWatchLater = () => {
    watchLaterService(
      auth,
      userDataState.watchLater,
      video,
      userDataDispatch,
      navigate
    );
    setIsOptionActive((prev) => !prev);
  };
  return (
    <div className="options br-sm">
      <ul>
        <li onClick={handleWatchLater}>
          <span className="material-icons">watch_later</span>Save to watch later
        </li>
        <li onClick={handleSavePlaylist}>
          <span className="material-icons">playlist_add</span>Save to playlist
        </li>
        <li onClick={handleLikeVideo}>
          <span className="material-icons">thumb_up</span>Add to liked videos
        </li>
      </ul>
    </div>
  );
};

export {VideoOption};
