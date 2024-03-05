import { useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

function Comments({ eventId }) {
  const [showComments, setShowComments] = useState(false);
  const [listOfComment, setListOfComment] = useState([]);

  useEffect(() => {
    async function getComments() {
      const res = await fetch(`/api/comments/${eventId}`);
      const { data } = await res.json();
      console.log(data);
      setListOfComment(data);
    }

    getComments();
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData) {
    // send data to API
    const sentStatus = await fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const statusData = await sentStatus.json();
    console.log(statusData);
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList commentList={listOfComment} />}
    </section>
  );
}

export default Comments;
