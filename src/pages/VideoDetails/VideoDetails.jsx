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
  const defaultID = "84e96018-4022-434e-80bf-000ce4cd12b8";
  const BASE_URL = "http://localhost:8800/";
  // const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  //const api_key = "e1bce57d-0ebd-4421-9c13-971e9c9fc49e";

  const [videoDetails, setVideoDetails] = useState([]);
  const [videoList, setVideoList] = useState([]);
 
  

  useEffect(() => {
    async function getVideoDetails() {
      try {
        const vidID = objID || defaultID;
        const response = await axios.get(
          `${BASE_URL}videos/${vidID}`
          // `${BASE_URL}videos/${vidID}?api_key=${api_key}`
        );
        
        setVideoDetails(response.data);
      } catch (error) {
        console.error("Error getVideoDetails:" + error);
      }
    }

    async function getVideoList() {
      try {
        const response = await axios.get(
          `${BASE_URL}videos`
          // `${BASE_URL}videos?api_key=${api_key}`
        );
        
        setVideoList(response.data);
      } catch (error) {
        console.error("Error getVideoList:" + error);
      }
    }
    getVideoDetails();
    getVideoList();
  }, [objID]);

  //need to update sidebar list so that the default video is not displayed in the sidebar

  const updatedVideoList = videoList.filter(video => video.id !== (objID || defaultID));

  const videoDetailsComments = videoDetails.comments;
  //note to refactor the code and use one page component for video-details + homepage
  //sidebar will only render if objID doesn't exist, ie !objID returns true if objID is undefined so true && true will render the sidebar

  const [commentsData, setCommentsData] = useState([])
  const handleNewComment = (newComment) => {
    setCommentsData(prevComments => [...prevComments, newComment]);
  };

  return (
    <>
      <div className="component__header">
        <Header />
      </div>
      <div className="component__video-player">
        <VideoPlayer video={videoDetails} />
      </div>
      <div className="components">
        <div className="sub-components">
          <div className="component__video-info">
            <VideoInfo video={videoDetails} />
          </div>
          <div className="component__comments-form">
            <CommentsForm commentsData={videoDetailsComments} OnCommenting = {handleNewComment} />
          </div>
          <div className="component__comments-info">
            <Comments commentsData={videoDetailsComments} />
          </div>
          {!objID && (
            <div className="component__side-bar">
              <SideBar videos={updatedVideoList} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default VideoDetails;
