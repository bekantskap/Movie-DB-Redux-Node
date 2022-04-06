import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeMovie } from '../actions/movieAction';
import { MovieContext } from '../App';

export default function WatchListCard(props) {
  console.log(props.movie);
  const dispatch = useDispatch();
  const id = props.movie.id;

  const x = useContext(MovieContext);

  const removeMovieHandler = id => {
    dispatch(removeMovie(id));
  };

  const setReviewId = id => {
    x.setMovie(id)
  }

  return (
    <article>
      <p>{props.movie.title}</p>
      <Link to="/writereviews">
        <input type="button" onClick={() => setReviewId(id)} value="Write Review"></input>
      </Link>
      <input
        type="button"
        value="Remove Movie"
        onClick={() => removeMovieHandler(id)}
      ></input>
    </article>
  );
}
