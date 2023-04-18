import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleArticleCard } from "./SingleArticleCard";
import { getArticleById } from "../utils/api";

export const SingleArticle = ({ loggedInUser }) => {
    const [singleArticle, setSingleArticle] = useState();
    const { article_id } = useParams();

useEffect(() => {
  getArticleById(article_id).then((singleArticleData) => {
    setSingleArticle(singleArticleData);
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
      </div>
    );
}