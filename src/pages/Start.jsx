import StartCard from '../components/StartCard';

export default function Start(props) {
  const m = props.data.movies;

  return (
    <main>
      <h1>START</h1>
      <section>
        {m.map((movie, index) => {
          return <StartCard movie={movie} key={index} />;
        })}
      </section>
    </main>
  );
}
