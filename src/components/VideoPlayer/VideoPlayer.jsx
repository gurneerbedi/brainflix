import "./VideoPlayer.scss"
import VideoPreview from "../../assets/images/Upload-video-preview.jpg";
import PlayIcon from "../../assets/Icons/play.svg";
import ScrubIcon from "../../assets/Icons/scrub.svg";
import FullscreenIcon from "../../assets/Icons/fullscreen.svg";



export default function Header(){
    return(
        <div className = 'video-player'>
       <video className = 'video-player__preview' controls poster = {VideoPreview} >Video Goes Here</video>
       <div className = 'video-player__controls'>
       <img className = 'video-player__play' src= {PlayIcon} alt="play-icon"/>
       <img className = 'video-player__scrub' src= {ScrubIcon} alt="scrub-icon"/>
       <img className = 'video-player__fullscreen' src= {FullscreenIcon} alt="fullscreen-icon"/>
       </div>
       </div>
    );
}