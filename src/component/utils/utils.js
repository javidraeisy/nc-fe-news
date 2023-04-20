import { patchArticleVote } from "./api";

export const handleSingleArticleUpvote = (
  article_id,
  setUserUpvote,
  setErr,
  userUpvote
) => {
  setErr(false);
  setUserUpvote(userUpvote + 1);
  patchArticleVote(article_id, 1).catch(() => {
    setUserUpvote(0);
    setErr(true);
  });
};

export const handleSingleArticleDownvote = (
  article_id,
  setUserDownvote,
  setErr,
  userDownvote
) => {
  setErr(false);
  setUserDownvote(userDownvote - 1);
  patchArticleVote(article_id, -1).catch(() => {
    setUserDownvote(0);
    setErr(true);
  });
};
