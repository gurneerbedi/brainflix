import "./CommentsForm.scss";
import "../../assets/partials/__global.scss";
import "../../assets/partials/typography.scss";
import MohanMuruge from "../../assets/images/Mohan-muruge.jpg";

export default function CommentsForm() {
  return (
    
    <div className="comment">
          <fieldset className="comment__fieldset">
            <img
              className="comment__avatar"
              src={MohanMuruge}
              alt="Mohan-muruge-img"
            />
            {/* <label htmlFor = "comment" className="comment__label">
              JOIN THE CONVERSATION
            </label> */}
            <textarea
              id="comment"
              className="comment__textarea"
              name="comment"
              placeholder=" Add a new comment"
              required
            ></textarea>
            </fieldset>
            <div className="comment__button-container">
              <button className="comment__button">COMMENT</button>
            </div>
          
    </div>
  );
}
