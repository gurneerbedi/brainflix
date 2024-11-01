import "./VideoInfo.scss";
import "../../assets/partials/__global.scss"
import "../../assets/partials/typography.scss"
import LikesIcon from "../../assets/Icons/likes.svg";
import ViewsIcon from "../../assets/Icons/views.svg";
import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function VideoInfo({ids}) {
  const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const api_key = "e1bce57d-0ebd-4421-9c13-971e9c9fc49e";

  console.log("rendering...");

  const {objID} = useParams();
  const id = objID;

  const [video, setVideo] = useState(null);
 
  useEffect(() =>{
 async function getVideos(){
  try{
    const response = await axios.get(`${BASE_URL}videos/${id}?api_key=${api_key}`);
    console.log("i'm getting data from api");
    setVideo(response.data);
    

  }
  catch(error){
    console.log("Error getVideos:" + error);
  }
 
 }

  getVideos(); }, [id]);
  if (!video) return <p>Loading...</p>;

  return (
   
    <>
  
    <div className="info">
      <h1 className="info__title">{video.title}</h1>
      <div className="info__headline">
        <div className="info__container1">
          <p className="info__author">By {video.channel}</p>
          <p className="info__date">
            {new Date(video.timestamp).toLocaleDateString()}
          </p>
        </div>
        <div className="info__container2">
          <div className="info__views-container">
            <img
              className="info__views-icon"
              src={ViewsIcon}
              alt="views-logo"
            />
            {/* <p className="info__views-count">{video.views}</p> */}
          </div>
          <div className="info__likes-container">
            <img
              className="info__likes-icon"
              src={LikesIcon}
              alt="likes-logo"
            />
             {/* <p className="info__likes-count">{video.likes}</p> */}
          </div>
        </div>
      </div>
      <div className="info__description">
        {/* <p className="info__description-paragraph">{video.description}</p>
        <p className = "info__description-comments-total">{video.comments.length} Comments</p> */}
      </div>
    </div>
    </>
  );
}
