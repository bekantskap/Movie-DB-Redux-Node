export default function ReviewCard(props) {
  console.log(props);
  const m = props.movie;
  return (
    <article>
      <h1>{m.title}</h1>
    </article>
  );
}
