import {useNavigate} from "react-router-dom";
import {useAuth, useUserData} from "../context";
import {addToLikedVideos} from "../utils";

const VideoOption = ({setIsOptionActive, setIsSaveToPlaylistActive, video}) => {
  const {userDataDispatch} = useUserData();
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
    if (auth.isLoggedIn) {
      addToLikedVideos(video, auth.token, userDataDispatch);
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="options br-sm">
      <ul>
        <li>
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
