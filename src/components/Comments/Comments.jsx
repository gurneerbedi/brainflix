import "./Comments.scss";
import "../../assets/partials/__global.scss";
import "../../assets/partials/typography.scss";

export default function Comments({comments}) {
    
  return (
    <div className = "comments__list">
        {comments.map((comment) => (
        <article className="comment__container" key={comment.id}>
          <div className="comment__avatar"></div>
          <div className="comment__content">
            <div className="comment__heading"></div>
            <h1 className="comment__name">{comment.name}</h1>
            <div className="comment__timestamp">
              {new Date(comment.timestamp).toLocaleDateString()}
            </div>
            <p className="comment__comment">{comment.comment}</p>
          </div>
        </article>
        ))}
    </div>
    
  );
}
