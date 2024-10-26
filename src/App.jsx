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
  
  // videocomments.forEach(comment => {
  //   console.log(comment.name);

  // })
  
  return (
    <>
      <Header />
      <VideoPlayer />
      <VideoInfo video={currentVideo} />
      <CommentsForm />
      {/* <Comments videocomments/> */}
      <SideBar videos = {videodata}/>
    </>
  );
}

export default App;
