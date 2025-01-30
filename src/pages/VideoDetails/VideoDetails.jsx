import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Comments from "../../components/Comments/Comments";
import SideBar from "../../components/SideBar/SideBar";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

function VideoDetails({ videoList }) {
  let { objID } = useParams();
  const BASE_URL = "https://gurneerbedi-brainflix-backend.vercel.app/";

  const [videoDetails, setVideoDetails] = useState([]);
  if (!objID) {
    objID = videoList[0].id;
  }

  async function getVideoDetails() {
    try {
      const response = await axios.get(`${BASE_URL}videos/${objID}`);

      setVideoDetails(response.data);
    } catch (error) {
      console.error("Error getVideoDetails:" + error);
    }
  }

  useEffect(() => {
    getVideoDetails();
  }, [objID]);

  //need to update sidebar list so that the default video is not displayed in the sidebar

  const updatedVideoList = videoList.filter(
    video => video.id !== objID);

    //show sidebar only on homepage ie when objID is undefined

    const showSideBar = !useParams().objID;
  

  const videoDetailsComments = videoDetails.comments;
  //note to refactor the code and use one page component for video-details + homepage
  //sidebar will only render if objID doesn't exist, ie !objID returns true if objID is undefined so true && true will render the sidebar
  


  //delete a comment function 
  async function handleCommentDelete(commentId){
    try{
      console.log("deleting comment id", commentId, "for vid", objID);
      await axios.delete(`${BASE_URL}videos/${objID}/comments/${commentId}`);
      setVideoDetails({...videoDetails, comments: videoDetails.comments.filter((comment)=> comment.id !== commentId),
      });
    }
    catch(error){
      console.error("Error handleCommentDelete");
    }
  }

  if (!videoDetails) {
    return (
      <div>
        <h1>Loading Video Details Page</h1>
      </div>
    );
  }
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
            <CommentsForm
              commentsData={videoDetailsComments}
              getVideoDetails={getVideoDetails}
            />
          </div>
          <div className="component__comments-info">
            <Comments commentsData={videoDetailsComments} handleCommentDelete ={handleCommentDelete} />
          </div>
          {showSideBar && (
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
