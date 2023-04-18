import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleArticleCard } from "./SingleArticleCard";
import { getArticleById } from "../utils/api";
import { Comments } from "./Comments";
import { getCommentsByArticleId } from "../utils/api";

export const SingleArticle = ({ loggedInUser }) => {
  const [singleArticle, setSingleArticle] = useState();
  const [comments, setComments] = useState();
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((singleArticleData) => {
      setSingleArticle(singleArticleData);
    });
  }, [article_id]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((articleComments) => {
      setComments(articleComments);
      console.log(articleComments);
    });
  }, [article_id]);

  return (
    <div>
      {" "}
      {singleArticle ? (
        <SingleArticleCard
          singleArticle={singleArticle}
          setSingleArticle={setSingleArticle}
        />
      ) : (
        <p>Loading…</p>
      )}{" "}
      {comments ? (
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
      ) : (
        <p>Loading…</p>
      )}
    </div>
  );
};
