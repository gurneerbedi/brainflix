import "./VideoPlayer.scss";
import "../../assets/partials/__global.scss";
import "../../assets/partials/typography.scss";
//import VideoPreview from "../../assets/images/Upload-video-preview.jpg";
import PlayIcon from "../../assets/Icons/play.svg";
import ScrubIcon from "../../assets/Icons/scrub.svg";
import FullscreenIcon from "../../assets/Icons/fullscreen.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VideoPlayer({ ids }) {
  const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const api_key = "e1bce57d-0ebd-4421-9c13-971e9c9fc49e";

  console.log("rendering VideoPlayer...");

  const [videoPlayer, setVideoPlayer] = useState([]);

  useEffect(() => {
    async function getVideoPlayer() {
      try {
        const response = await axios.get(
          `${BASE_URL}videos/${ids}?api_key=${api_key}`
        );
        console.log("i'm getting video player data from api");
        setVideoPlayer(response.data);
      } catch (error) {
        console.log("Error getVideoPlayer:" + error);
      }
    }

    getVideoPlayer();
  }, [ids]);

  if (!videoPlayer) return <p>Loading Video Player...</p>;
  return (
    <div className="video-player">
      <video
        className="video-player__preview"
        controls
        poster={videoPlayer.image}
      ></video>
      {/* <div className="video-player__controls">
        <img className="video-player__play" src={PlayIcon} alt="play-icon" />
        <img className="video-player__scrub" src={ScrubIcon} alt="scrub-icon" />
        <img
          className="video-player__fullscreen"
          src={FullscreenIcon}
          alt="fullscreen-icon"
        />
      </div> */}
    </div>
  );
}
