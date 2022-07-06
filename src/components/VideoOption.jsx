import {useNavigate, useLocation} from "react-router-dom";
import {useAuth, useUserData} from "../context";
import {likeService, watchLaterService, removeFromHistory} from "../services";
import {isVideoPresent} from "../utils";

const VideoOption = ({setIsOptionActive, setIsSaveToPlaylistActive, video}) => {
  const {userDataState, userDataDispatch} = useUserData();
  const {auth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleRemoveVideo = () => {
    removeFromHistory(video._id, auth.token, userDataDispatch);
  };
  return (
    <div className="options br-sm">
      <ul>
        <li onClick={handleWatchLater}>
          <span className="material-icons">watch_later</span>
          {isVideoPresent(userDataState.watchLater, video._id)
            ? "Remove from watch later"
            : "save to watch later"}
        </li>
        <li onClick={handleSavePlaylist}>
          <span className="material-icons">playlist_add</span>Save to playlist
        </li>
        <li onClick={handleLikeVideo}>
          <span className="material-icons">thumb_up</span>
          {isVideoPresent(userDataState.likedVideos, video._id)
            ? "Remove from liked videos"
            : "Add to liked videos"}
        </li>
        {location.pathname === "/history" && (
          <li onClick={handleRemoveVideo}>
            <span className="material-icons">delete</span>Remove video
          </li>
        )}
      </ul>
    </div>
  );
};

export {VideoOption};
