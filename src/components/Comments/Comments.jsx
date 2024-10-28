import "./Comments.scss";
import "../../assets/partials/__global.scss";
import "../../assets/partials/typography.scss";
import { formatDistanceToNow} from 'date-fns';



export default function Comments({comments}) {
    
  return (
    <div className = "comments__list">
        {comments.map((comment) => (
        <article className="comment__container" key={comment.id}>
          <div className="comment__avatars"></div>
          <div className="comment__content">
            <div className="comment__heading">
            <h1 className="comment__name">{comment.name}</h1>
            <div className="comment__timestamp">
              {comment.timestamp && formatDistanceToNow(new Date(comment.timestamp), {addSuffix: true})}
              
              {/* {new Date(comment.timestamp).toLocaleDateString()} */}
            </div>
            </div>
            <p className="comment__comment">{comment.comment}</p>
          </div>
        </article>
        ))}
    </div>
    
  );
}
