import { useState } from 'react';
import { addMovie } from '../actions/movieAction.js';
import store from '../index.js';

function StartCard(props) {
  const m = props.movie;

  const handleClick = () => {
    store.dispatch(addMovie(m));
  };

  return (
    <article className="action movies">
      <h2>{m.title}</h2>
      <input type="button" value="Watch List" onClick={handleClick}></input>
    </article>
  );
}

export default StartCard;
