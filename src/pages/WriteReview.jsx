import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import store from '..';
import { MovieContext } from '../App';
import StarRating from '../components/StarRating';

export default function WriteReviews() {
  const textInput = React.createRef();

  const x = useContext(MovieContext);

  const changeHandler = () => {
    x.setReview(textInput.current.value);
  };

  const clickHandler = () => {
    store.dispatch(addReviewHandler());
  };

  const addReviewHandler = () => {
    return {
      type: 'ADD_REVIEW',
      payload: {
        id: x.movieId,
        review: x.review,
        rating: x.rating,
        rated: true,
      },
    };
  };

  return (
    <article className="write-review__container">
      <div className="write-review__wrapper">
        <form className="write-review__form">
          <h2>Write Review</h2>
          <textarea
            className="write-review__text-box"
            onChange={changeHandler}
            ref={textInput}
            placeholder={'Write something about ' + x.movie.title}
            type="text"
          />
          <StarRating />
          <Link to="/">
            <button className="yellow-btn" type="button" onClick={clickHandler}>
              Submit Review
            </button>
          </Link>
        </form>
      </div>
    </article>
  );
}
