import "./CommentsForm.scss";
import "../../assets/partials/__global.scss";
import "../../assets/partials/typography.scss";
import MohanMuruge from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/Icons/add_comment.svg";

export default function CommentsForm() {
  return (
    <div className="comment-container">
      <img
        className="comment__avatar"
        src={MohanMuruge}
        alt="Mohan-muruge-img"
      />
      <div className="comment__label-container">
        <h1 className="comment__label">JOIN THE CONVERSATION</h1>
        <div className="comment">
          <fieldset className="comment__fieldset">
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
            <img
              className="comment__comment-icon"
              src={CommentIcon}
              alt="comment-icon"
            />
            <button className="comment__button">COMMENT</button>
          </div>
        </div>
      </div>
    </div>
  );
}
