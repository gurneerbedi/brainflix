
import "./Home.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Comments from "../../components/Comments/Comments";
import SideBar from "../../components/SideBar/SideBar";
import videodata from "../../data/video-details.json";

function Home() {
  //const currentVideo = videodata[0];
  //const [selected, setSelected] = useState(currentVideo);
  //const video = videodata.filter((d) => d !== selected);
  const defaultID = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const api_key = "e1bce57d-0ebd-4421-9c13-971e9c9fc49e";

  console.log("rendering HomePage...");

  const [videoData, setVideoData] = useState([]);
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    async function getVideoData() {
      try {
        const response = await axios.get(
          `${BASE_URL}videos/${defaultID}?api_key=${api_key}`
        );
        console.log("i'm getting video player data from api");
        setVideoData(response.data);
      } catch (error) {
        console.log("Error getVideoPlayer:" + error);
      }
    }

    async function getVideoList(){
      try {
        const response = await axios.get(
          `${BASE_URL}videos?api_key=${api_key}`
        );
        console.log("i'm getting video list data from api");
        setVideoList(response.data);
      } catch (error) {
        console.log("Error getVideoList:" + error);
      }
    }

    getVideoData();
    getVideoList();
  }, [defaultID]);

  const commentsData = videoData.comments;

  return (
    <>
      <div className="component__header">
        <Header />
      </div>
      <div className="component__video-player">
        <VideoPlayer video = {videoData}/>
      </div>

      <div className="components">
        <div className="sub-components">
          <div className="component__video-info">
            <VideoInfo video = {videoData} />
          </div>
          <div className="component__comments-form">
            <CommentsForm/>
          </div>
          <div className="component__comments">
            {" "}
            <Comments commentsData = {commentsData} />
          </div>
        </div>
        <div className="component__side-bar">
          <SideBar videos={videoList} />
        </div>
      </div>
    </>
  );
}

export default Home;
