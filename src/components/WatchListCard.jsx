import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeMovie } from '../actions/movieAction';
import { MovieContext } from '../App';

export default function WatchListCard(props) {
  const m = props.movie;
  const dispatch = useDispatch();
  const id = m.id;

  const x = useContext(MovieContext);

  const removeMovieHandler = id => {
    dispatch(removeMovie(id));
  };

  const setMovieHandler = () => {
    x.setMovieId(id);
  };

  return (
    <article className="watch-list__info">
      <h2>{props.movie.title}</h2>
      <img
        className="watch-list__img"
        src={props.movie.posterUrl}
        alt="movie poster"
      ></img>
      <section className="watch-list__btns">
        <Link to="/writereviews">
          <input
            className="yellow-btn"
            type="button"
            onClick={() => setMovieHandler()}
            value="Write Review"
          ></input>
        </Link>
        <input
          className="yellow-btn"
          type="button"
          value="Remove Movie"
          onClick={() => removeMovieHandler(id)}
        ></input>
      </section>
    </article>
  );
}
