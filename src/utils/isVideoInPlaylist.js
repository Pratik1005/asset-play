const isVideoInPlaylist = (playlist, title, videoId) => {
  console.log("playlists", playlist);
  console.log("title", title);
  console.log("videoId", videoId);
  return playlist
    .filter((item) => item.title === title)[0]
    .videos.some((item) => item._id === videoId);
};

export {isVideoInPlaylist};
