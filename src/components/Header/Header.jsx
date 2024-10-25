import MohanMuruge from "../../assets/images/Mohan-muruge.jpg";
import SearchIcon from "../../assets/Icons/search.svg";
import BrainflixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import './Header.scss';
export default function Header(){
    return(
        <div className = 'nav'>
        <img className = 'nav__logo' src = {BrainflixLogo} alt = "brainflix-logo"/>
        <div className = 'nav__container'>
        <div className = 'nav__search-container'>
        <input type = "search" name = "search-bar" id = "search-bar" className = "nav__search-bar" 
        onChange={(e) => setSearchQuery(e.target.value)} placeholder = "Search"/>
        <img className = 'nav__search-icon' src= {SearchIcon} alt="search-icon" />
        </div>
        <button className = 'nav__button'>UPLOAD</button>
        <img className = 'nav__mohan' src = {MohanMuruge} alt = 'Mohan-muruge'/>
        </div>
        </div>
    );
}
