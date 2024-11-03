import { useState } from "react";
import "./Home.scss";

import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Comments from "../../components/Comments/Comments";
import SideBar from "../../components/SideBar/SideBar";
import videodata from "../../data/video-details.json";

function Home() {
  const currentVideo = videodata[0];
  const [selected, setSelected] = useState(currentVideo);
  const video = videodata.filter((d) => d !== selected);
  const defaultID = currentVideo.id;

  return (
    <>
      <div className="component__header">
        <Header />
      </div>
      <div className="component__video-player">
        <VideoPlayer ids = {defaultID} />
      </div>

      <div className="components">
        <div className="sub-components">
          <div className="component__video-info">
            <VideoInfo ids={defaultID} />
          </div>
          <div className="component__comments-form">
            <CommentsForm/>
          </div>
          <div className="component__comments">
            {" "}
            <Comments ids ={defaultID} />
          </div>
        </div>
        <div className="component__side-bar">
          <SideBar videos={video} setSelected={setSelected} />
        </div>
      </div>
    </>
  );
}

export default Home;
