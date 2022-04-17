import {useState} from "react";
import {useUserData} from "../context";

const PlaylistModal = ({setIsSaveToPlaylistActive, videoData}) => {
  const [isCreateNewActive, setIsCreateNewActive] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const {userDataState, userDataDispatch} = useUserData();

  const handleCreateNewPlaylist = () => {
    userDataDispatch({
      type: "ADD_TO_PLAYLIST",
      payload: {videoData, playlistName},
    });
    setIsSaveToPlaylistActive((prev) => !prev);
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
          {userDataState.playlist.map((item) => (
            <div className="pd-bottom-md">
              <label className="flex-center">
                <input type="checkbox" /> {item.name}
              </label>
            </div>
          ))}
          {/* <div className="pd-bottom-md">
            <label className="flex-center">
              <input type="checkbox" /> React
            </label>
          </div>
          <div className="pd-bottom-md">
            <label className="flex-center">
              <input type="checkbox" /> Javascript
            </label>
          </div> */}
        </div>
        <div>
          {isCreateNewActive ? (
            <form>
              <div className="pd-bottom-md">
                <label>
                  Name:
                  <input
                    type="text"
                    placeholder="Enter playlist name"
                    value={playlistName}
                    onChange={(e) => setPlaylistName(e.target.value)}
                  />
                </label>
              </div>
              <button
                className="btn btn-primary"
                onClick={handleCreateNewPlaylist}
              >
                Create
              </button>
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
