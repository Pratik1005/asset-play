import {reduceTitleLength, convertViews} from "../utils/";

const VideoCard = ({cardData}) => {
  const {thumbnail, profile, title, creator, views, date, length} = cardData;
  return (
    <div className="video">
      <div className="video-thumbnail">
        <img src={thumbnail} alt="{title}" className="img-responsive" />
        <span className="time-overlay fw-bold">{length}</span>
      </div>
      <div className="video-info">
        <img src={profile} alt="{creator}" className="br-full" />
        <div className="meta-data">
          <h5 className="fw-bold pd-bottom-sm video-title">
            {reduceTitleLength(title)}
          </h5>
          <p className="pd-bottom-sm creator">{creator}</p>
          <div className="views-date-info">
            <span>{convertViews(views)}</span>
            <span>•</span>
            <span>{date}</span>
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
