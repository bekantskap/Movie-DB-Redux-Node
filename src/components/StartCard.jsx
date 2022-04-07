import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../App.js';
import { Carousel, CarouselItem } from './Carousel.js';
import WatchListButton from './WatchListButton.jsx';

function StartCard(props) {
  const m = props.movie;

  const x = useContext(MovieContext);

  const selectedMovie = () => {
    x.setMovie(m);
  };

  return (
    <article className="start-container">
      <section className="start-info">
        <img className="start-img" src={m.posterUrl} alt="movieposter" />
        <div className="text-box">
          <h3 className="start-title">{m.title}</h3>
          <p className="start-year">{'Year: ' + m.year}</p>
          <p className="start-time">{'Length: ' + m.runtime}</p>
          <Link className="movie-link" to="/movie">
            <input
              className="yellow-btn start-btn-hidden"
              type="button"
              value="Read more"
              onClick={selectedMovie}
            ></input>
          </Link>
        </div>
      </section>
    </article>
  );
}

export default StartCard;
