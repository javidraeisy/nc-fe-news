export const Comments = ({
  comment: { body, author, created_at, votes, comment_id },
  setComments,
  loggedInUser,
}) => {
  const date = new Date(created_at);

  return (
    <div>
      <section className="section__comment">
        <p>{body}</p>
        <div className="comment__author_date">
          <span>
            {author}, {date.toLocaleDateString()}
          </span>
        </div>
      </section>
    </div>
  );
};
