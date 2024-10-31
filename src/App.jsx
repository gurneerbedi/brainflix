import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import Comments from "./components/Comments/Comments";
import SideBar from "./components/SideBar/SideBar";
import videodata from "./data/video-details.json";
import Upload from "./pages/Upload/Upload"

function App() {
  const currentVideo = videodata[0];
  const videocomments = currentVideo.comments;

  console.log("render App");
  const [selected, setSelected] = useState(videodata[0]);

  const video = videodata.filter((d) => d !== selected);

  return (
    <>
    {/* <Upload></Upload> */}

      <div className="component__header">
        <Header />
      </div>
      <div className="component__video-player">
        <VideoPlayer selected={selected} />
      </div>

      <div className="components">
        <div className = "sub-components">
        <div className="component__video-info">
          <VideoInfo selected={selected} />
        </div>
        <div className="component__comments-form">
          <CommentsForm />
        </div>
        <div className="component__comments">
          {" "}
          <Comments comments={selected.comments} />
        </div>
        </div>
        <div className="component__side-bar">
          <SideBar videos={video} setSelected={setSelected} />
        </div>
      </div>
    </>
  );
}

export default App;
