import { useState } from "react";


export const SingleArticleCard = ({
  singleArticle: {
    title,
    author,
    created_at,
    article_img_url,
    body,
    topic,
    votes,
    comment_count,
    article_id,
  },
}) => {
  const date = new Date(created_at);

  return (
    <section className="section__single_article">
      <h2 className="article__title">{title}</h2>
      <p className="single_article__author_and_date">
        <span>by {author}</span>
        <span>{date.toLocaleDateString()}</span>
      </p>
      <img src={article_img_url} alt={title} className="article__img" />
      <p className="body__single_article">{body}</p>
      <div className="article__card__footer">
        <span>#{topic}</span>
      </div>
    </section>
  );
};