import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../App';
import WatchListButton from '../components/WatchListButton';

export default function Movie() {
  const x = useContext(MovieContext);
  return (
    <article className="movie-container">
      <section className="movie-info">
        <img className="movie-img" src={x.movie.posterUrl} alt="movie poster" />
        <div>
          <h1>{x.movie.title}</h1>
          <p>{x.movie.genres.join(' ')}</p>
          <p>
            <i className="fa-solid fa-calendar"></i>
            {x.movie.year}
          </p>
          <p>
            <i className="fa-solid fa-circle-question"></i>
            {x.movie.plot}
          </p>
          <p>
            <i className="fa-solid fa-stopwatch"></i>
            {x.movie.runtime}
          </p>
          <p>
            <i className="fa-solid fa-person"></i>
            {x.movie.director}
          </p>
          <p>
            <i className="fa-solid fa-people-group"></i>
            {x.movie.actors}
          </p>
          <Link to="/">
            <WatchListButton movie={x.movie} />
          </Link>
        </div>
      </section>
    </article>
  );
}
