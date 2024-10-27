import "./VideoInfo.scss";
import "../../assets/partials/__global.scss"
import "../../assets/partials/typography.scss"
import LikesIcon from "../../assets/Icons/likes.svg";
import ViewsIcon from "../../assets/Icons/views.svg";

export default function VideoInfo({ selected }) {
  return (
    <div className="info">
      <h1 className="info__title">{selected.title}</h1>
      <div className="info__headline">
        <div className="info__container1">
          <p className="info__author">By {selected.channel}</p>
          <p className="info__date">
            {new Date(selected.timestamp).toLocaleDateString()}
          </p>
        </div>
        <div className="info__container2">
          <div className="info__views-container">
            <img
              className="info__views-icon"
              src={ViewsIcon}
              alt="views-logo"
            />
            <p className="info__views-count">{selected.views}</p>
          </div>
          <div className="info__likes-container">
            <img
              className="info__likes-icon"
              src={LikesIcon}
              alt="likes-logo"
            />
             <p className="info__likes-count">{selected.likes}</p>
          </div>
        </div>
      </div>
      <div className="info__description">
        <p className="info__description-paragraph">{selected.description}</p>
        <p className = "info__description-comments-total">{selected.comments.length} Comments</p>
      </div>
    </div>
  );
}
