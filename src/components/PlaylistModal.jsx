import {useState} from "react";
import {toast} from "react-toastify";
import {useUserData} from "../context";

const PlaylistModal = ({setIsSaveToPlaylistActive, videoData}) => {
  const [isCreateNewActive, setIsCreateNewActive] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const {userDataState, userDataDispatch} = useUserData();

  const handleCreateNewPlaylist = (e) => {
    e.preventDefault();
    userDataDispatch({
      type: "ADD_TO_PLAYLIST",
      payload: {videoData, playlistName},
    });
    toast.success(`Video added to ${playlistName} playlist`);
    setIsSaveToPlaylistActive((prev) => !prev);
  };

  const isVideoInPlaylist = (id, playlist) => {
    console.log(id, playlist);
    const playlistObj = userDataState.playlist.filter(
      (item) => item.name === playlist
    );
    console.log(playlistObj);
    return playlistObj[0].videos.some((item) => item._id === id);
  };

  const handleTogglePlaylistVideo = () => {};
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
          {userDataState.playlist.map((item) => (
            <div className="pd-bottom-md flex-center" key={item.name}>
              <input
                type="checkbox"
                name="playlist-name"
                id="playlist-name"
                checked={isVideoInPlaylist(videoData._id, item.name)}
                onChange={handleTogglePlaylistVideo}
              />
              <label htmlFor="playlist-name">{item.name}</label>
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
