import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";


function Articles() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    fetch("https://be-news-project-3e8t.onrender.com/api/articles")
      .then((response) => response.json())
      .then((body) => setArticles(body));
  }, []);

  return (
    <div>
      {articles ? (
        <ul className="article__cards">
          {articles.articles.map((article) => {
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
