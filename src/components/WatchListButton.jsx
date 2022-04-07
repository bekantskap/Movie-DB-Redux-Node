import { addMovie } from '../actions/movieAction.js';
import store from '../index.js';

export default function WatchListButton(props) {
  const m = props.movie;
  const handleClick = () => {
    store.dispatch(addMovie(m));
  };

  return (
    <input
      className="yellow-btn movie-btn"
      type="button"
      value="Watch List"
      onClick={handleClick}
    ></input>
  );
}
