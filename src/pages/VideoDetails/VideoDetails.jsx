import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Comments from "../../components/Comments/Comments";
import SideBar from "../../components/SideBar/SideBar";
import { useParams } from "react-router";

function VideoDetails() {
  const { objID } = useParams();

  return (
    <>
      <div className="component__header">
        <Header />
      </div>
      <div className="component__video-player">
        <VideoPlayer ids={objID} />
      </div>
      <div className="components">
        <div className="sub-components">
          <div className="component__video-info">
            <VideoInfo ids={objID} />
          </div>
          <div className="component__comments-form">
            <CommentsForm />
          </div>
          <div className="component__comments-info">
            <Comments ids={objID} />
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoDetails;
