import { useState, useEffect } from "react";
import "./comment.css";

const Comment = ({
  img,
  title,
  timeCreatedt,
  replies,
  handleReply,
  margin,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [commentBody, setCommentBody] = useState("");
  const [newComment, setNewComment] = useState(replies);

  const onComment = (comment) => {
    setNewComment((prev) => [comment, ...prev]);
  };

  return (
    <div>
      <div className="comment-main--container">
        <img className="comment-avatar--image" src={img} alt="avatar" />
        <div className="comment-text--container">
          <p>{title}</p>
          <div>
            <button>Like</button>
            <button onClick={() => setShowInput(!showInput)}>
              {showInput ? "Cancel" : "Reply"}
            </button>
            <span>{timeCreatedt}</span>
          </div>
        </div>
      </div>
      {showInput && (
        <div style={{ marginLeft: 60 }}>
          <input
            type="text"
            onChange={(e) => setCommentBody(e.target.value)}
            value={commentBody}
          />
          <button
            onClick={() => {
              onComment({
                key: Date.now(),
                img: "https://www.w3schools.com/w3images/avatar6.png",
                title: commentBody,
                timeCreated: "1m ago",
                showInput: false,
                replies: [],
              });
              setCommentBody("");
            }}
          >
            Add
          </button>
        </div>
      )}
      <div id="comments">
        {newComment?.length &&
          newComment?.map((el) => handleReply(el, margin + 30))}
      </div>
    </div>
  );
};

export default Comment;
