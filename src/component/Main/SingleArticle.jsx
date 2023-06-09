import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleArticleCard } from "./SingleArticleCard";
import { getArticleById } from "../utils/api";
import { Comments } from "./Comments";
import { getCommentsByArticleId } from "../utils/api";
import { CommentAdder } from "./CommentAdder";

export const SingleArticle = ({ loggedInUser }) => {
  const [singleArticle, setSingleArticle] = useState();
  const [comments, setComments] = useState();
  const { article_id } = useParams();
  const [articleLoading, setArticleLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);

  useEffect(() => {
    setArticleLoading(true);
    getArticleById(article_id).then((singleArticleData) => {
      setSingleArticle(singleArticleData);
       setArticleLoading(false);
    });
  }, [article_id]);

  useEffect(() => {
    setCommentsLoading(true);
    getCommentsByArticleId(article_id).then((articleComments) => {
      setComments(articleComments);
      setCommentsLoading(false);
    });
  }, [article_id]);

  return (
    <>
      {" "}
      {!articleLoading ? (
        <SingleArticleCard
          singleArticle={singleArticle}
          setSingleArticle={setSingleArticle}
        />
      ) : (
        <p>Loading…</p>
      )}{" "}
      <CommentAdder
        article_id={article_id}
        setComments={setComments}
        loggedInUser={loggedInUser}
      />
      {!commentsLoading && (
        <ul className="comment__ul">
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <Comments
                  comment={comment}
                  setComments={setComments}
                  loggedInUser={loggedInUser}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
