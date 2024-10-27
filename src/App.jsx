import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import Comments from "./components/Comments/Comments"
import SideBar from "./components/SideBar/SideBar"
import videodata from "./data/video-details.json";

function App() {
  const currentVideo = videodata[0];
  const videocomments = currentVideo.comments;

  console.log("render App");
  const [selected, setSelected] = useState(videodata[0]);

  const video = videodata.filter((d) => d !== selected);
  
  // videocomments.forEach(comment => {
  //   console.log(comment.name);
  // })
  
  return (
    <>
      <Header />
      <VideoPlayer selected={selected} />
      <VideoInfo selected={selected} />
      <CommentsForm />
      <Comments comments ={selected.comments}/>
      <SideBar videos = {video} setSelected={setSelected} />
    </>
  );
}

export default App;
