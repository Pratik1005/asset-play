import {useUserData} from "../context";

const VideoOption = ({setIsOptionActive}) => {
  const {userDataDispatch} = useUserData();

  const handleSavePlaylist = () => {
    setIsOptionActive((prev) => !prev);
    userDataDispatch({type: "TOGGLE_PLAYLIST_MODAL"});
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
        <li>
          <span className="material-icons">thumb_up</span>Add to liked videos
        </li>
      </ul>
    </div>
  );
};

export {VideoOption};
