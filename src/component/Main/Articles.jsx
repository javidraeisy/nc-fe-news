import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { getArticles } from "../utils/api";

function Articles() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    getArticles().then((body) => setArticles(body));
  }, []);

  return (
    <div>
      {articles ? (
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
