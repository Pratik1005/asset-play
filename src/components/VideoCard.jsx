const VideoCard = ({cardData}) => {
  const {thumbnail, profile} = cardData;
  return (
    <div className="video">
      <div className="video-thumbnail">
        <img src={thumbnail} alt="title" className="img-responsive" />
        <span className="time-overlay fw-bold">19:13</span>
      </div>
      <div className="video-info">
        <img src={profile} alt="profile" className="br-full" />
        <div className="meta-data">
          <h5 className="fw-bold pd-bottom-sm">How to Invest in your 20s</h5>
          <p className="pd-bottom-sm">warikoo</p>
          <div className="views-date-info">
            <span>2.6M views</span>
            <span>•</span>
            <span>1 year ago</span>
          </div>
        </div>
        <div className="video-option">
          <span class="material-icons">more_vert</span>
        </div>
      </div>
    </div>
  );
};

export {VideoCard};
