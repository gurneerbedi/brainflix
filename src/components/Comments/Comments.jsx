import "./Comments.scss";
import "../../assets/partials/__global.scss";
import "../../assets/partials/typography.scss";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Comments({ commentsData = [] }) {
  //have to use an empty array for commentsData because if it's not loaded properly 
  //the commentsData.map runs into an error while waiting

  console.log("rendering...Comments");

 
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
