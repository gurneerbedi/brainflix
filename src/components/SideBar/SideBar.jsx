import "./SideBar.scss";
import "../../assets/partials/__global.scss";
import "../../assets/partials/typography.scss";
import { useNavigate } from "react-router-dom";

const SideBar = ({ videos }) => {
  const navigate = useNavigate();
  const handleVideoClick = (id) => {
    navigate(`/videos/${id}`);
  };

  return (
    <div className="side-bar">
      <h1 className="side-bar__heading">NEXT VIDEOS</h1>
      {videos.map((video) => (
        <div
          className="side-bar__video"
          key={video.id}
          onClick={() => handleVideoClick(video.id)}
        >
          <img
            className="side-bar__thumbnail"
            src={`http://localhost:8800${video.image}`}
            alt={video.title}
          />
          <div className="side-bar__info">
            <h1 className="side-bar__title">{video.title}</h1>
            <p className="side-bar__channel">{video.channel}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
