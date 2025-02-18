import "./Comments.scss";
import { formatDistanceToNow } from "date-fns";
export default function Comments({ commentsData = [], handleCommentDelete }) {
  //have to use an empty array for commentsData because if it's not loaded properly 
  //the commentsData.map runs into an error while waiting

  
  return (
    <div className="comments__list">
      {commentsData.map((comment) => (
        <article className="comment__container" key={comment.id}>
          <div className="comment__avatars"></div>
          <div className="comment__content">
            <div className="comment__heading">
              <h1 className="comment__name">{comment.name}</h1>
              <div className="comment__timestamp">
                {comment.timestamp &&
                  formatDistanceToNow(new Date(comment.timestamp), {
                    addSuffix: true,
                  })}
              </div>
            </div>
            <p className="comment__comment">{comment.comment}</p>
            <button className = "comment__delete-button" onClick={() => handleCommentDelete(comment.id)}>Delete</button>
          </div>
        </article>
      ))}
    </div>
  );
}
