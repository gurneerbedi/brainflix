import "./CommentsForm.scss";
import "../../assets/partials/__global.scss";
import "../../assets/partials/typography.scss";
import MohanMuruge from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/Icons/add_comment.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CommentsForm({ commentsData = [], OnCommenting }) {
  const [commentInput, setCommentInput] = useState("");

  const { objID } = useParams();
  const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const api_key = "e1bce57d-0ebd-4421-9c13-971e9c9fc49e";

  const handleInputChange = (e) => {
    setCommentInput(e.target.value);
  };

  async function postComments() {
    const commentObj = {
      name: "Gurneer",
      comment: commentInput,
    };

    try {
      const response = await axios.post(
        `${BASE_URL}videos/${objID}/comments?api_key=${api_key}`,
        commentObj
      );
      const newComment = {
        id: response.data.id,
        name: response.data.name,
        comment: response.data.comment,
        timestamp: new Date(response.data.timestamp).toISOString(),
      };
      //setComments([...comments, newComment]);
      //setComments(oldComments => [...oldComments, newComment]);

      setCommentInput("");
    } catch (error) {
      console.error("Error postComments:" + error);
    }
  }
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
              value={commentInput}
              onChange={handleInputChange}
            ></textarea>
          </fieldset>
          <div className="comment__button-container">
            <img
              className="comment__comment-icon"
              src={CommentIcon}
              alt="comment-icon"
            />
            <button className="comment__button" onClick={postComments}>
              COMMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
