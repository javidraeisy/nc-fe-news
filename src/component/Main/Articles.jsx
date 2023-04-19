import { useEffect, useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { getArticles } from "../utils/api";

function Articles() {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
     setIsLoading(true);
    getArticles().then((body) => {setArticles(body);
    setIsLoading(false);}
    );
  }, []);

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
