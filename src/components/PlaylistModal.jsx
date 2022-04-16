const PlaylistModal = () => {
  return (
    <div className="playlist-overlay">
      <div className="playlist-ctn">
        <p>Save to...</p>
        <div className="playlist">
          <div>
            <label>
              <input type="checkbox" /> React
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" /> Javascript
            </label>
          </div>
        </div>
        <div>
          <p>
            <span class="material-icons">add</span> Create new playlist
          </p>
          <div>
            <div>
              <label>
                Name: <input type="text" placeholder="Enter playlist name" />
              </label>
            </div>
            <p>Create</p>
          </div>
        </div>
      </div>
    </div>
  );
};
