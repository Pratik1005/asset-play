const isVideoLiked = (videos, videoId) => {
  return videos.some((video) => video._id === videoId);
};

export {isVideoLiked};
