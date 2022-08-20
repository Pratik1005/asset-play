const isVideoInPlaylist = (playlist, videoId, playlistId) => {
  return playlist
    .filter((item) => item._id === playlistId)[0]
    .videos.some((item) => item._id === videoId);
};

export {isVideoInPlaylist};
