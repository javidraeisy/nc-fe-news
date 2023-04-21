import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://be-news-project-3e8t.onrender.com/api",
});

export const getArticles = (topic_name, sort_by, order) => {
  return newsApi
    .get("/articles", { params: { topic: topic_name, sort_by, order } })
    .then(({ data }) => {
      return data.articles;
    });
};

// export const getArticles = () => {
//   return newsApi.get("/articles").then(({ data }) => {
//     // console.log(data.articles);
//     return data.articles;
//   });
// };

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

export const patchArticleVote = (article_id, incrementVote) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes: incrementVote });
};

export const postComment = (article_id, newComment, loggedInUser) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      username: loggedInUser,
      body: newComment,
    })
    .then(({ data }) => {
      return data.comment;
    });
};

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
