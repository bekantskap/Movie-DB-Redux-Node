import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '..';
import { addReview } from '../actions/movieAction';
import { MovieContext } from '../App';
import StarRating from '../components/StarRating';

export default function WriteReviews() {
  const [review, setReview] = useState('');
  const textInput = React.createRef();

  const x = useContext(MovieContext);

  const clickHandler = () => {
    store.dispatch(addReviewHandler(review));
  };

  const changeHandler = () => {
    setReview(textInput.current.value);
  };

  const addReviewHandler = review => {
    console.log(review);
    return {
      type: 'ADD_REVIEW',
      payload: {
        id: x.movie,
        review: review,
        rating: x.rating,
      },
    };
  };

  console.log(review);
  return (
    <article>
      <div>
        <form>
          <input onChange={changeHandler} ref={textInput} type="text" />
          <button type="button" onClick={clickHandler}>
            Click Here
          </button>
          <StarRating />
        </form>
      </div>
    </article>
  );
}
