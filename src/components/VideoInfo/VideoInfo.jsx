import "./VideoInfo.scss";
import LikesIcon from "../../assets/Icons/likes.svg";
import ViewsIcon from "../../assets/Icons/views.svg";

export default function VideoInfo({ video }) {

  if (!video) return <p>Loading VideoInfo...</p>;
  return (
    <>
      <div className="info">
        <h1 className="info__title">{video.title}</h1>
        <div className="info__headline">
          <div className="info__container1">
            <p className="info__author">By {video.channel}</p>
            <p className="info__date">
              {new Date(video.timestamp).toLocaleDateString()}
            </p>
          </div>
          <div className="info__container2">
            <div className="info__views-container">
              <img
                className="info__views-icon"
                src={ViewsIcon}
                alt="views-logo"
              />
              <p className="info__views-count">{video.views}</p>
            </div>
            <div className="info__likes-container">
              <img
                className="info__likes-icon"
                src={LikesIcon}
                alt="likes-logo"
              />
              <p className="info__likes-count">{video.likes}</p>
            </div>
          </div>
        </div>
        <div className="info__description">
          <p className="info__description-paragraph">{video.description}</p>
          <p className="info__description-comments-total">
            {video.comments?.length || 0} Comments
          </p>
        </div>
      </div>
    </>
  );
}
