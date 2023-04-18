import { useState } from "react";
import { Link } from "react-router-dom";




export const ArticleCard = ({
  article_img_url,
  title,
  author,
  votes,
  comment_count,
  topic,
  created_at,
  article_id,
  setArticles,
}) => {
  const [err, setErr] = useState(null);
  const date = new Date(created_at);
  return (
    <section className="section__article">
      <Link to={`/articles/${article_id}`} className="links">
        <img src={article_img_url} alt={title} className="article__img" />
        <h2 className="article__title">{title}</h2>
      </Link>
      <p className="article__author_and_date">
        By {author} on {date.toLocaleDateString()}
      </p>
    </section>
  );
};
