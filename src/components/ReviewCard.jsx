export default function ReviewCard(props) {
  const m = props.movie;
  return (
    <article className="review-card">
      <section className="review-info">
        <img className="review-img" alt="poster url" src={m.posterUrl}></img>
        <h1>{m.title}</h1>
        <h4>Review </h4>
        <h4>{m.review}</h4>
        <section className="review-rating">
          <h2>Rating</h2>
          <h2>{m.rating}</h2>
        </section>
      </section>
    </article>
  );
}
