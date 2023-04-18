import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://be-news-project-3e8t.onrender.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then(({ data }) => {
    // console.log(data.articles);
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.articleComments;
  });
};