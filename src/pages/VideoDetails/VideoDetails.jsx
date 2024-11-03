import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Comments from "../../components/Comments/Comments";
import SideBar from "../../components/SideBar/SideBar";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";


function VideoDetails() {
  const { objID } = useParams();
  const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const api_key = "e1bce57d-0ebd-4421-9c13-971e9c9fc49e";

  console.log("rendering Video...");

  const [videoDetails, setVideoDetails] = useState([]);
  //const currentVideo = videodata[0];
  //const defaultID = currentVideo.id;

  useEffect(() => {
    //const videoId = objID || defaultID;
    async function getVideoDetails() {
      try {
        const response = await axios.get(
          `${BASE_URL}videos/${objID}?api_key=${api_key}`
        );
        console.log("i'm getting video details data from api");
        setVideoDetails(response.data);
      } catch (error) {
        console.log("Error getVideoDetails:" + error);
      }
    }

    getVideoDetails();
  }, [objID]);

  const videoDetailsComments = videoDetails.comments;

  return (
    <>
      <div className="component__header">
        <Header />
      </div>
      <div className="component__video-player">
        <VideoPlayer video = {videoDetails} />
      </div>
      <div className="components">
        <div className="sub-components">
          <div className="component__video-info">
            <VideoInfo video = {videoDetails} />
          </div>
          <div className="component__comments-form">
            <CommentsForm />
          </div>
          <div className="component__comments-info">
            <Comments commentsData = {videoDetailsComments} />
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoDetails;
