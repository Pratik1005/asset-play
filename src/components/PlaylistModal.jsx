import {useState} from "react";
import {useUserData} from "../context";

const PlaylistModal = () => {
  const [isCreateNewActive, setIsCreateNewActive] = useState(false);
  const {userDataDispatch} = useUserData();

  return (
    <div className="playlist-overlay">
      <div className="save-playlist-ctn br-sm pd-sm">
        <div className="flex-center box-title pd-bottom-lg">
          <h4>Save to...</h4>
          <span
            className="material-icons cursor-pointer"
            onClick={() => userDataDispatch({type: "TOGGLE_PLAYLIST_MODAL"})}
          >
            close
          </span>
        </div>
        <div className="playlist pd-bottom-md">
          <div className="pd-bottom-md">
            <label className="flex-center">
              <input type="checkbox" /> React
            </label>
          </div>
          <div className="pd-bottom-md">
            <label className="flex-center">
              <input type="checkbox" /> Javascript
            </label>
          </div>
        </div>
        <div>
          {isCreateNewActive ? (
            <div>
              <div className="pd-bottom-md">
                <label>
                  Name: <input type="text" placeholder="Enter playlist name" />
                </label>
              </div>
              <button className="btn btn-primary">Create</button>
            </div>
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
