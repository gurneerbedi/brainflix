import "./Comments.scss";
import "../../assets/partials/__global.scss";
import "../../assets/partials/typography.scss";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Comments({ ids }) {
  const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const api_key = "e1bce57d-0ebd-4421-9c13-971e9c9fc49e";

  console.log("rendering...Comments");

  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      try {
        const response = await axios.get(
          `${BASE_URL}videos/${ids}?api_key=${api_key}`
        );
        console.log("i'm getting comments data from api");
        setComments(response.data.comments);
      } catch (error) {
        console.log("Error getComments:" + error);
      }
    }

    getComments();
  }, [ids]);
  if (!comments) return <p>Loading Comments...</p>;

  return (
    <div className="comments__list">
      {comments.map((comment) => (
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
