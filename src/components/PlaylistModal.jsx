import axios from "axios";
import {useState, useEffect} from "react";
import {useAuth} from "../context";
import {
  addNewPlaylist,
  addVideoToPlaylist,
  isVideoInPlaylist,
  removeVideoFromPlaylist,
} from "../utils";

const PlaylistModal = ({setIsSaveToPlaylistActive, videoData}) => {
  const [isCreateNewActive, setIsCreateNewActive] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const {auth} = useAuth();
  const [allPlaylist, setAllPlaylist] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("api/user/playlists", {
          headers: {authorization: auth.token},
        });
        setAllPlaylist(response.data.playlists);
      } catch (err) {
        console.error("get playlist", err);
      }
    })();
  }, []);

  const handleCreateNewPlaylist = (e) => {
    e.preventDefault();
    addNewPlaylist(playlistName, auth.token);
    addVideoToPlaylist(playlistName, videoData, auth.token);
    setIsSaveToPlaylistActive((prev) => !prev);
  };

  const handleTogglePlaylistVideo = (playlists, playlistId, title, videoId) => {
    const isChecked = isVideoInPlaylist(playlists, title, videoId);
    if (isChecked) {
      removeVideoFromPlaylist(playlistId, videoId, auth.token);
    } else {
      addVideoToPlaylist(title, videoData, auth.token);
    }
  };
  return (
    <div className="playlist-overlay">
      <div className="save-playlist-ctn br-sm pd-sm">
        <div className="flex-center box-title pd-bottom-lg">
          <h4>Save to...</h4>
          <span
            className="material-icons cursor-pointer"
            onClick={() => setIsSaveToPlaylistActive((prev) => !prev)}
          >
            close
          </span>
        </div>
        <div className="playlist pd-bottom-md">
          {allPlaylist.length > 0 &&
            allPlaylist.map((item) => (
              <div className="pd-bottom-md flex-center" key={item._id}>
                <input
                  type="checkbox"
                  name={item.title}
                  id={item.title}
                  checked={isVideoInPlaylist(
                    allPlaylist,
                    item.title,
                    videoData._id
                  )}
                  onChange={() =>
                    handleTogglePlaylistVideo(
                      allPlaylist,
                      item._id,
                      item.title,
                      videoData._id
                    )
                  }
                />
                <label htmlFor={item.title}>{item.title}</label>
              </div>
            ))}
        </div>
        <div>
          {isCreateNewActive ? (
            <form onSubmit={handleCreateNewPlaylist}>
              <div className="pd-bottom-md">
                <label>
                  Name:
                  <input
                    type="text"
                    placeholder="Enter playlist name"
                    required
                    value={playlistName}
                    onChange={(e) => setPlaylistName(e.target.value)}
                  />
                </label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          ) : (
            <p
              className="flex-center cursor-pointer"
              onClick={() => setIsCreateNewActive((prev) => !prev)}
            >
              <span className="material-icons">add</span> Create new playlist
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export {PlaylistModal};
