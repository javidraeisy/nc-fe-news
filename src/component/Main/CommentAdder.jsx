import { useState } from "react";
import { postComment } from "../utils/api";

export const CommentAdder = ({ article_id, setComments, loggedInUser }) => {
  const [newComment, setNewComment] = useState("");
  const [postInProgress, setPostInProgress] = useState(null);
  const [postSuccess, setPostSuccess] = useState(null);
  const [emptyComment, setEmptyComment] = useState(null);
  const [err, setErr] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.length === 0) {
      setEmptyComment(true);
      setPostSuccess(false);
    } else {
      setEmptyComment(false);
      setPostInProgress(true);
      postComment(article_id, newComment, loggedInUser)
        .then((newCommentFromApi) => {
          setComments((currComments) => {
            return [newCommentFromApi, ...currComments];
          });
          setPostInProgress(false);
          setPostSuccess(true);
          setErr(false);
          setNewComment("");
        })
        .catch((err) => {
          console.log(err);
          setPostInProgress(false);
          setPostSuccess(false);
          setErr(true);
        });
    }
  };

  return (
    <form className="comment_adder" onSubmit={handleSubmit}>
      <label htmlFor="new_comment" className="new_comment">
        <h3>Add a Comment</h3>
        <textarea
          id="new_comment"
          className="textarea__new_comment"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          placeholder="Enter text here..."
        />
      </label>
      <button
        className="button_comment_adder"
        type="submit"
        disabled={postInProgress === true}
      >
        POST
      </button>
      {emptyComment ? (
        <p className="post_err__message">Please enter your comment.</p>
      ) : null}
      {postInProgress ? <p>Posting comment...</p> : null}
      {err ? (
        <p className="post_err__message">
          Sorry, an error occurred. Please try again.
        </p>
      ) : null}
      {postSuccess ? (
        <p className="post_success__message">Successful post!</p>
      ) : null}
    </form>
  );
};
