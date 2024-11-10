import "./CommentsForm.scss";
import "../../assets/partials/__global.scss";
import "../../assets/partials/typography.scss";
import MohanMuruge from "../../assets/images/Mohan-muruge.jpg";
import CommentIcon from "../../assets/Icons/add_comment.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CommentsForm({ getVideoDetails }) {
  const { objID } = useParams();
  const BASE_URL = "http://localhost:8800/";

  const [commentInput, setCommentInput] = useState("");

  const handleInputChange = (e) => {
    setCommentInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadComment = {
      comment: commentInput,
    };

    axios
      .post(`${BASE_URL}videos/${objID}/comments`, uploadComment)
      .then((response) => {
        console.log(response.status, response.data.token);
        alert("Your comment was uploaded successfully!");
        getVideoDetails();
        setCommentInput("");
      })
      .catch((error) => console.error("Error uploadingComment", error));
  };

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
            <button className="comment__button" onClick={handleSubmit}>
              COMMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
