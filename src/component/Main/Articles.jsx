import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";
import { getArticles } from "../utils/api";

function Articles() {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
const { topic_name } = useParams();

useEffect(() => {
  setIsLoading(true);
  getArticles(topic_name, "created_at", "desc"
)
    .then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    })
}, [topic_name]);


  return (
    <div>
      {!isLoading ? (
        <ul className="article__cards">
          {articles.map((article) => {
            return (
              <li key={article.article_id}>
                <ArticleCard
                  key={article.article_id}
                  {...article}
                  setArticles={setArticles}
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
}

export default Articles;
